"use client";
import { useState, useEffect, useRef } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';

{     /*fonts*/     }
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
        <main className={`bg-white min-h-screen max-w-screen items-center justify-between sm:mx-8 phone:mx-8 text-black ${dilight.className}`}>
          <div className="flex flex-col items-center">
          <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
        </div>
  
        <section className="max-w-screen-lg mx-auto mt-16 mx-2">

  
  <div className="text-center my-16 mb-8">
    <h1 className={`${dimed.className} text-5xl text-black mt-24`}>Product Management Portfolio</h1>
  </div>

        <div className="mt-4 flex flex-row justify-center">
            <div className="flex items-justify ">
                <Image
                      src="/images/dibsscreen.png"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />
                    </div>
                <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-left">
                <h2 className={`${direg.className} mt-4 text-5xl text-black flex justify-left ml-8 max-w-xl text-left mb-1`}>A Digital Thrift Store Solution to Campus Waste Management</h2>
                <Link href="/product/dibs" className={`${direg.className} mt-4 text-xl text-accent flex ml-10 text-left mb-1`}>View Project &#8594;</Link>
                </div>
                </div>

        </div>


  {/*
  
  <div className="flex flex-col my-2 mt-8">
                          <h1 className={`${direg.className} my-2`}>PRODUCTS</h1>
                          <div className="flex flex-row">
                          <div>
                          <h1 className={`${dilight.className} mb-4`}><strong className={`${dimed.className} mb-4`}>DIBS!</strong> </h1>
                          </div>
                          <div className="ml-4 ">
                          A campus-specific mobile app where students can share images & locations of items they no longer need, fostering a sustainable & collaborative community to reduce waste. 
                          <br/> 
                          <Link href="/product/dibs" className="underline decoration-1 underline-offset-2 mx-2">Learn More</Link>

                          </div>
                          
                  </div>
                  </div>
  
                  <div className="flex flex-col my-2 mt-8">
                          <h1 className={`${direg.className} my-2`}>TOOLS</h1>
                          <div className="flex relative z-20 max-w-screen-md text-justify">
                              <h1 className={`${dilight.className}`}>
                                  <li className="list-none">Jira, Slack, Trello, Miro</li>
                              </h1>
                          </div>
                  </div>
  
                  <div className="flex flex-col my-2 mt-8">
                          <h1 className={`${direg.className} my-2`}>SKILLS</h1>
                          <div className="flex relative z-20 max-w-screen-md text-justify">
                              <h1 className={`${dilight.className}`}>
                                  <li className="list-none">Organize Meetings</li>
                              </h1>
                          </div>
                  </div>

      */}
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
      );
  }