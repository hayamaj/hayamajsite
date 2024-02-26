"use client";
import Image from "next/image";
import Link from 'next/link';
import Navigation from '../../Nav'; // Import the Navigation component
import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local'
import { CldImage } from 'next-cloudinary';
import React from "react";
import VideoPlayer from "../../VideoPlayer";

{     /*fonts*/     }
const dilight = localFont({
  src: [
    {
      path: '../../../fonts/dilight.otf',
      weight: '400'
    }
  ],
})
const direg = localFont({
  src: [
    {
      path: '../../../fonts/direg.otf',
      weight: '400'
    }
  ],
})
const dimed = localFont({
  src: [
    {
      path: '../../../fonts/dimed.otf',
    }
  ],
})
const dibold = localFont({
  src: [
    {
      path: '../../../fonts/dibold.otf',
    }
  ],
})
const diboldital = localFont({
  src: [
    {
      path: '../../../fonts/diboldital.otf',
    }
  ],
})
const didot = localFont({
  src: [
    {
      path: '../../../fonts/didot.ttf',
    }
  ],
})
const didotdf = localFont({
  src: [
    {
      path: '../../../fonts/didotdf.ttf',
    }
  ],
})
const proxnova = localFont({
  src: [
    {
      path: '../../../fonts/pnlight.otf',
    }
  ],
})

const proxnovareg = localFont({
  src: [
    {
      path: '../../../fonts/pnreg.ttf',
    }
  ],
})

const proxnovabold = localFont({
  src: [
    {
      path: '../../../fonts/pnbold.otf',
    }
  ],
})
export default function Dibs() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);
    const isIndexPage = true; 
  
    useEffect(() => {
      // Add event listener to detect clicks outside the sidebar
      const handleOutsideClick = (e) => {
        if (isSidebarOpen && !e.target.closest('.sidebar')) {
          setIsSidebarOpen(false);
        }
      };
  
      // Attach the event listener
      document.addEventListener('mousedown', handleOutsideClick);
  
      // Remove the event listener on component unmount
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isSidebarOpen]);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const handleVideoTimeUpdate = () => {
      const videoElement = videoRef.current;
      if (!videoElement) return;
  
      const remainingTime = videoElement.duration - videoElement.currentTime;
      const threshold = 6; // Adjust this threshold as needed
  
      if (remainingTime <= threshold) {
        setVideoEnded(true);
      }
    };
      return (
        <main className={`bg-white flex min-h-screen max-w-screen flex-col items-center justify-between`}>
        <div className="flex flex-col items-center">
        <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
        </div>
                {/*problem statement */}
                <section className="max-w-screen-lg sm:max-w-screen-sm mx-auto mt-16 mx-2">

                <div className="flex flex-col justify-center items-center">
                <h2 className={`${direg.className} mt-24 text-md text-accent text-center mb-1`}>2022 &#8212; 2024</h2>
                <h2 className={`${direg.className} mt-4 text-5xl text-black flex justify-center items-center max-w-xl text-center mb-1`}>A Digital Thrift Store Solution to Campus Waste Management</h2>
                </div>

                <div className="flex justify-center items-center">
                <h2 className={`${dilight.className} mt-8 text-black text-center justify-content max-w-lg`}>
                    From the initial prototype to getting ready for launch, I've led Dibs through several product cycles. 
                    It all started on a sunny afternoon during my sophomore year of college, in the middle of move-out season.
                    Seeing all the nice furniture left out on the streets because students couldn't be bothered  to find a better home for them gave me the idea for Dibs
                    &#8212; a sustainable solution, like a digital thrift store tailored for students. </h2>
                    </div>

                <div className="flex flex-row justify-center">
                    <div>
                    <Image
                      src="/images/haya.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>

                    <div className="ml-4 flex justify-center flex-col items-center">
                <h2 className={`${direg.className} mt-8 text-black text-center justify-content max-w-md`}>
                    Haya AlMajali </h2>
                    <h2 className={`${dilight.className} text-neutral-400 text-center justify-content max-w-md`}>
                    Product Lead </h2>
                    </div>
                    </div>





<h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>Problem Statement</h2>
<h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
During move-out periods, our streets get cluttered with perfectly
 usable items discarded by students (mostly those living off-campus).
  It's not that these items are in bad shape, it's just easier for students
   to toss them than to find a new home for them. BU Students actually have
    a special name for this period &#8212; “Allston Christmas”. 
    While some students do take advantage of this time & scour the streets of Allston for free furniture,
    it's not enough to address all the waste left out on the 
    streets during this time. So, I wanted to find a solution that would equally
    benefit the students & protect our environment. </h2>


    <h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>User Research Insights</h2>
<h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
 </h2>
 <h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
    There was no doubt that the cluttered streets of Boston posed an environmental issue. 
    What we needed confirmation on was the second half of the issue &#8212; how the students were affected. So, we surveyed & 
    interviewed about 50 BU students, focusing on their experience living on/off campus.
    Here are our preliminary findings:
</h2>
 <div>
                    <Image
                      src="/images/userins.png"
                      width={1200}
                      height={1200}
                      alt="Picture of the author"
                    />
                </div>

                <h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>Competitive Analysis</h2>
<h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
        Our main competitors, such as <strong className={`${direg.className} mt-4 text-accent text-xl text-left justify-content max-w-5xl`}>Craigslist </strong>, <strong className={`${direg.className} mt-4 text-xl text-accent text-left justify-content max-w-5xl`}>Facebook Marketplace</strong> & <strong className={`${direg.className} mt-4 text-xl text-accent text-left justify-content max-w-5xl`}>BuyNothing</strong> lack features tailored for university students.
        Facebook Marketplace & Craigslist's broad audience don't cater specifically to students' needs, especially during move-in/move-out periods. 
        Their interfaces fail to accomodate their fast-paced, mobile-centric lifestyles and  they lack the sense of community needed to incentivize students to utilize this solution.
 </h2>



 <h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>Minimum Viable Product (MVP)</h2>
 <div>
                    <Image
                      src="/images/dibs-old.png"
                      width={1000}
                      height={1000}
                      alt="Picture of the author"
                    />
                </div>
                <h2 className={`${direg.className} mt-4 text-2xl text-black text-left justify-content max-w-5xl`}>Key Features
 </h2>
                <div className={`${dilight.className} mt-4 text-xl text-center text-justify text-black list-none`}>
            <li><strong className={`${direg.className} mt-4 text-accent text-3xl text-center justify-content max-w-5xl`}>1.&nbsp;Post &nbsp; </strong>  </li>
            <li className="ml-6">Post a picture & short description of an item that you're looking to get rid of.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-3xl text-center justify-content max-w-5xl`}>2.&nbsp;View & Favorite &nbsp;</strong></li>
            <li className="ml-6">Scroll through the app, favoriting items that catch your eye & saving them to your profile.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-3xl text-center justify-content max-w-5xl`}>3.&nbsp;Proximity-Based Claiming &nbsp;</strong></li>
            <li className="ml-6">Claim & Collect items only when you're in range.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-3xl text-center justify-content max-w-5xl`}>4.&nbsp;Filter by Tags &nbsp;</strong></li>
            <li className="ml-6">Filter your search to find items based on tags like location, color, condition & item type.</li>
            </div>


 <h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>Product Roadmap</h2>
<h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
    In Spring 2022, I applied to the <strong className={`${direg.className} mt-4 text-accent text-left justify-content max-w-5xl`}>Spark! Technology Innovation Fellowship </strong>with my idea. 
    This fellowship provided structured instruction on the product innovation process with technical support from 
    experts and industry mentors.

    As the Technical Innovator, I led a team of 4 students through weekly Agile sprints.
    We conducted rigorous user research, & translated our findings into user specifications & stories
    as well as a product roadmap that served as our guide throughout the semester. 
    
    We built all our prototypes in Miro & Figma, & then developed our market-ready version 
    &#8212; A web application built using React, Firebase, TailwindCSS & Google Maps API.


 </h2>

 <h2 className={`${direg.className} mt-16 text-5xl text-black text-left mb-1`}>Product Evolution</h2>
<h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>
 </h2>
 <div className="mt-4">
              <div className="my-4">
                <h2 className={`${direg.className} text-xl text-accent text-center mb-1`}>Version 1 &#8212; Spring 2022 </h2>
                  <div>
                    <Image
                      src="/images/dibs-old.png"
                      width={900}
                      height={900}
                      alt="Picture of the author"
                    />
                </div>
              </div>

            <div className={`${dilight.className} text-black text-lg text-left mb-1`}>
                My Role: <strong className={`${direg.className} text-lg text-black text-center mb-1`}>Technical Innovator/Lead Developer</strong>
            </div>
            <div className={`${dilight.className} text-black text-lg text-left mb-1`}>
                Tech Stack: <strong className={`${direg.className} text-lg text-black text-center mb-1`}>React Native, Expo, TypeScript, Firebase & Google Auth</strong>
            </div>
            </div>

            <h2 className={`${dilight.className} my-12 text-black text-left justify-content max-w-5xl`}>
            Even after the fellowship ended, I was determined to continue working on Dibs. So, I applied to the <strong className={`${direg.className} mt-4 text-accent text-left justify-content max-w-5xl`}>Launch Lab product track</strong>,
            , which is a program at BU that provides students with instruction & support to launch their products into the real world. Over the next year, 
            we
            <div className={`${dilight.className} ml-4 mt-4 text-xl text-center text-justify text-black list-none`}>
            <li><strong className={`${direg.className} mt-4 text-accent text-2xl text-center justify-content max-w-5xl`}> &#8212; &nbsp;Expanded &nbsp; </strong> the development team by onboarding two new developers.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-2xl text-center justify-content max-w-5xl`}> &#8212; &nbsp;Transitioned &nbsp;</strong> the application from a web-based platform to a mobile-centric environment.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-2xl text-center justify-content max-w-5xl`}> &#8212; &nbsp;Implemented &nbsp;</strong> an overhaul of the app's UI/UX to enhance usability and optimize engagement.</li>
            <li><strong className={`${direg.className} mt-4 text-accent text-2xl text-center justify-content max-w-5xl`}> &#8212; &nbsp;Explored &nbsp;</strong> a more efficient way to facilitate & simplify the acquisition & disposal of items.</li>

            </div>
 </h2>
 <div className="mx-4 mt-8">
            <div className="my-4">
            <h2 className={`${direg.className} text-lg text-accent text-center mb-1`}>Version 2 &#8212;2023/4 </h2>
                  <div>
                    <Image
                      src="/images/dibs2.png"
                      width={900}
                      height={900}
                      alt="Picture of the author"
                    />
                </div>
              </div>
  
              <div className={`${dilight.className} text-black text-lg text-left mb-1`}>
                My Role: <strong className={`${direg.className} text-lg text-black text-center mb-1`}>Product Lead/Manager</strong>
            </div>
            <div className={`${dilight.className} text-black text-lg text-left mb-1`}>
                Tech Stack: <strong className={`${direg.className} text-lg text-black text-center mb-1`}>React Native, Expo, TypeScript, Firebase & Google Auth</strong>
            </div>

            </div>

            <h2 className={`${dilight.className} mt-4 text-black text-left justify-content max-w-5xl`}>Click here to watch a <Link href="/product/dibs/demo" className="underline decoration-1 underline-offset-2 text-accent">demo</Link> of the app.
 </h2>



</section>


              
        <div className={`${didotdf.className} px-1 py-8 flex items-center sm:flex-row flex-col`}>
          <span className="mx-auto text-center text-xs text-neutral-900">
            <div className="mb-4">
            <Link href="/about" className="underline decoration-1 underline-offset-2 mx-2">About</Link>
            <Link href="/contact" className="underline decoration-1 underline-offset-2 mx-2">Contact</Link> <br />
            </div>
            <div className={`${dilight.className}`}>
            hayamaj@bu.edu <br />
            [857] 891 - 8848 <br />
            </div>
          </span>
        </div>
      </main>
      )
  }