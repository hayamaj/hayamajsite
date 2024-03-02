"use client";

import { useState, useEffect, ChangeEvent } from 'react';
// Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Navigation from './Nav';
import NavBar from './NavBar';
import Image from 'next/image';

{     /*fonts*/     }
const noereg = localFont({
  src: [
    {
      path: '../fonts/noereg.ttf',
    }
  ],
})
const noeital = localFont({
  src: [
    {
      path: '../fonts/noeital.ttf',
    }
  ],
})
const noe = localFont({
  src: [
    {
      path: '../fonts/noe.ttf',
    }
  ],
})
const dilight = localFont({
  src: [
    {
      path: '../fonts/dilight.otf',
      weight: '400'
    }
  ],
})
const direg = localFont({
  src: [
    {
      path: '../fonts/direg.otf',
      weight: '400'
    }
  ],
})
const dimed = localFont({
  src: [
    {
      path: '../fonts/dimed.otf',
    }
  ],
})
const dibold = localFont({
  src: [
    {
      path: '../fonts/dibold.otf',
    }
  ],
})
const diboldital = localFont({
  src: [
    {
      path: '../fonts/diboldital.otf',
    }
  ],
})
const didot = localFont({
  src: [
    {
      path: '../fonts/didot.ttf',
    }
  ],
})
const didotdf = localFont({
  src: [
    {
      path: '../fonts/didotdf.ttf',
    }
  ],
})
const proxnova = localFont({
  src: [
    {
      path: '../fonts/pnlight.otf',
    }
  ],
})

const proxnovareg = localFont({
  src: [
    {
      path: '../fonts/pnreg.ttf',
    }
  ],
})

const proxnovabold = localFont({
  src: [
    {
      path: '../fonts/pnbold.otf',
    }
  ],
})



export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isIndexPage, setIsIndexPage] = useState(true); // assuming it starts as true
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const textToType ="HAYA IS AN ASPIRING PRODUCT LEADER WITH EXPERTISE IN PRODUCT MANAGEMENT, ENGINEERING & DESIGN.";
  const typingSpeed = 50; // Adjust typing speed here (in milliseconds)
  const initialDelay = 1000; // Adjust initial delay here (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    
    // Add initial delay before starting typewriter effect
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= textToType.length) {
          setDisplayText(textToType.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setAnimationCompleted(true); // Animation completed
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, []);


  useEffect(() => {
    
    // Add event listener to detect clicks outside the sidebar
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement; // Type assertion to HTMLElement
      if (isSidebarOpen && !(target && target.closest('.sidebar'))) {
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

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setIsIndexPage(false);
  };


 
  return (
    <main className={`${videoEnded ? 'bg-bg' : ''} min-h-screen h-screen max-w-screen items-center justify-between`}>
      
<div className={` flex flex-col justify-center items-center h-screen z-100 transition-opacity duration-500`} >
                        {/*  
    <video autoPlay playsInline muted onEnded={handleVideoEnd} className="w-1/2 h-1/2 object-cover object-right-bottom">
                      <source src="/introvid.mov"/>

                      </video>
                        */}
                      </div>
<div className="flex mx-auto flex-col">
                      <div className={`flex ${noereg.className} lg:text-4xl text-3xl lg:max-w-6xl max-w-7xl z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  before:absolute mx-auto text-left before:inset-0 before:animate-typewriter before:bg-bg after:absolute after:inset-0 after:w-[0.125em] after:animate-caret [text-wrap:balance] bg-clip-text text-bl`}>
                      &#8212; {displayText}
    </div>

    <div className="flex flex-col items-center justify-center">
      <Link href="/about" className={`${diboldital.className} border flex justify-center -mt-96 rounded-full px-4 py-2 border-accent text-accent transition-colors duration-300 ${animationCompleted ? 'bg-accent text-white hover:bg-white hover:text-accent' : 'bg-bg hover:bg-accent hover:text-white'}`}>ABOUT + CONNECT</Link>

    </div>
    </div>

 {/*
                      <div className={`flex ${noe.className} opacity-0 z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto text-left transition-opacity duration-250 ${videoEnded ? 'opacity-100' : ''} text-5xl md:text-4xl [text-wrap:balance] bg-clip-text text-bl max-w-3xl`}>
  <h1 className={` ${noereg.className} text-3xl text-bl`}>&#8212; HAYA IS AN ASPIRING <strong className={` ${noeital.className} text-3xl text-accent`}>PRODUCT LEADER </strong>WITH EXPERTISE IN <strong className={` ${noe.className} text-3xl text-bl`}>PRODUCT MANAGEMENT, </strong>
<strong className={` ${noe.className} text-3xl text-bl`}>ENGINEERING </strong> & <strong className={` ${noe.className} text-3xl text-bl`}>DESIGN. </strong></h1>
</div>
                      */}

<div className={` max-w-screen px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className={`mx-auto text-center text-gr text-sm`}>
          <div className="mb-4">
          </div>
          <div className={`${dilight.className} text-sm`}>
          <strong className={`text-sm`}>HAYA ALMAJALI</strong><br />
          <strong className={`text-sm`}>hayamaj@bu.edu</strong><br />
          <strong className={`text-sm`}>[857] 891 - 8848</strong><br />
          </div>
        </span>
      </div>
      </main>

  );
}