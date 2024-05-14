"use client";
import { useState, useEffect, useRef } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

{     /*fonts*/     }
const noereg = localFont({
  src: [
    {
      path: '../../fonts/noereg.ttf',
    }
  ],
})
const noeital = localFont({
  src: [
    {
      path: '../../fonts/noeital.ttf',
    }
  ],
})
const noe = localFont({
  src: [
    {
      path: '../../fonts/noe.ttf',
    }
  ],
})
const dilight = localFont({
  src: [
    {
      path: '../../fonts/dilight.otf',
      weight: '400'
    }
  ],
})
const direg = localFont({
  src: [
    {
      path: '../../fonts/direg.otf',
      weight: '400'
    }
  ],
})
const dimed = localFont({
  src: [
    {
      path: '../../fonts/dimed.otf',
    }
  ],
})
const dibold = localFont({
  src: [
    {
      path: '../../fonts/dibold.otf',
    }
  ],
})
const diboldital = localFont({
  src: [
    {
      path: '../../fonts/diboldital.otf',
    }
  ],
})
const didot = localFont({
  src: [
    {
      path: '../../fonts/didot.ttf',
    }
  ],
})
const didotdf = localFont({
  src: [
    {
      path: '../../fonts/didotdf.ttf',
    }
  ],
})
const proxnova = localFont({
  src: [
    {
      path: '../../fonts/pnlight.otf',
    }
  ],
})

const proxnovareg = localFont({
  src: [
    {
      path: '../../fonts/pnreg.ttf',
    }
  ],
})

const proxnovabold = localFont({
  src: [
    {
      path: '../../fonts/pnbold.otf',
    }
  ],
})

export default function Product() {

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
    const [showDropdown, setShowDropdown] = useState(false);
    const ModalRef = useRef(null); // Correct usage of useRef
    const [expanded, setExpanded] = useState(false);
  
      const toggleExpansion = () => {
        setExpanded(!expanded);
      };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ModalRef.current && !ModalRef.current.contains(event.target)) {
          setShowModal(false);
        }
      };
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    const closeDropdown = () => {
        setShowDropdown(false);
  
    };
  
      return (
        <main className={` min-h-screen max-w-screen items-center justify-between sm:mx-8 phone:mx-8 text-black ${dilight.className}`}>

  
        <section className="max-w-screen-lg mx-auto mt-16 mx-2 ">


        <h1 className={`${direg.className} flex justify-center text-center text-xl my-2 text-gr `}> PERSONAL PROJECTS</h1>

  {/* 
  <div className="text-center my-16 mb-8">
    <h1 className={`${dimed.className} text-5xl text-black mt-24`}>Product Management Portfolio</h1>
  </div>
*/}
        <div className="mt-4 flex flex-row justify-center pb-12">
            <div className="flex items-justify ">
                <Image
                      src="/images/dibsscreen.png"
                      width={150}
                      height={150}
                      alt="Picture of the author"
                    />
                    </div>
                <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-left">
                <h2 className={`${direg.className} mt-4 text-3xl text-black flex justify-left ml-8 max-w-xs text-left mb-1`}>A Digital Thrift Store Solution to Campus Waste Management</h2>
                <Link href="/product/dibs" className={`${dilight.className} mt-4 text-sm text-bl flex ml-10 text-left mb-1 hover:underline`}>View Project &#8594;</Link>
                </div>
                </div>

        </div>


        <section className=" mx-auto">
        <div className="flex flex-col my-4">
        <h1 className={`${direg.className} flex justify-center text-center text-xl my-2 text-gr`}>THE TECH I USE EVERYDAY</h1>

        <div className="flex flex-wrap mx-auto align-center justify-center mt-8 text-bg">
                <div className="flex flex-col items-left mx-4">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4 text-center text-md mt-2`}>jira / trello</h1>
            <h1 className={`${dilight.className} text-sm max-w-sm justify-text text-black`}>Used Jira & Trello for several project management positions, creating tickets, and adding in plugins. Additionally, to lead the development of my own product.</h1>
            </div>
            <div className="flex flex-col items-left mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-md mt-2`}>openai</h1>
            <h1 className={`${dilight.className} max-w-sm justify-text text-sm text-black`}>Used during my internship at Dakota Systems, where I assessed & implemented open-source AI technologies like GPT-4 to improve organizational, technical & business processes.</h1>
            </div>
            <div className="flex flex-col items-left mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-md mt-2`}>next.js + tailwindcss</h1>
            <h1 className={`${dilight.className} max-w-sm justify-text text-sm text-black`}>Self-taught during building my personal website. I hard-coded this website!</h1>
            </div>
            <div className="flex flex-col items-left mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-md mt-2`}>creative cloud apps</h1>
            <h1 className={`${dilight.className} max-w-sm justify-text text-sm text-black mb-2`}>Used Adobe Apps extensively for classes ranging from Software Development to Motion Graphics. This includes Adobe Photoshop, Illustrator, Premiere Pro & After Effects.</h1>
            </div>
            <div className="flex flex-col items-left mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-md mt-2`}>slack / atlassian / google suites</h1>
            <h1 className={`${dilight.className} max-w-sm justify-text text-sm text-black`}>Used for my project management positions to communicate with teams, set up meetings & faciliate development.</h1>
            </div>
            
                </div>

                </div>
       

                </section>

                <section className=" mx-auto pb-12">
        <div className="flex flex-col my-4">
        <h1 className={`${direg.className} flex mt-12 justify-center text-center text-xl my-2 text-gr`}>MY SOFT SKILLS</h1>

        <div className="flex flex-wrap mx-auto align-center justify-center mt-8 text-bg">
                <div className="flex flex-col items-center mx-4">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4 text-center text-lg mt-2`}>communication</h1>
            <h1 className={`${dilight.className} text-sm max-w-md justify-text`}></h1>
            </div>
            <div className="flex flex-col items-center mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-lg mt-2`}>time-management</h1>
            <h1 className={`${dilight.className} max-w-md justify-text text-sm`}></h1>
            </div>
            <div className="flex flex-col items-center mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-lg mt-2`}>leadership</h1>
            <h1 className={`${dilight.className} max-w-md justify-text text-sm`}></h1>
            </div>
            <div className="flex flex-col items-center mx-4 ">
        
            <h1 className={`${direg.className} mb-4 bg-black rounded-full py-1 px-4  text-center text-lg mt-2`}>collaboration</h1>
            <h1 className={`${dilight.className} max-w-md justify-text text-sm`}></h1>
            </div>
            
                </div>

                </div>
       

                </section>
</section>
          
<div className={` max-w-screen px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className={`mx-auto text-center text-gr text-sm`}>
          <div className="mb-4">
          </div>
          <div className={`${dilight.className} text-sm text-bl`}>
          <strong className={`text-sm`}>Haya AlMajali</strong><br />
          <strong className={`text-sm italic`}> &#169; 2024</strong><br />
          </div>
        </span>
      </div>



        </main>
      );
  }