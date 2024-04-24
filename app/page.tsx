"use client";
import styles from "./Home.module.css";
import { useState, useEffect, ChangeEvent } from 'react';
// Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Navigation from './Nav';
import NavBar from './NavBar';
import Image from 'next/image';
import RootLayout from './layout';
import router from "next/router";
import Name from "@/Name";
import NowPlaying from "@/NowPlaying";

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
  
  const textToType ="Aspiring Product Leader with skills in Product Management, Engineering & Design.";
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
    <main className={`animate-custom min-h-screen h-screen max-w-screen items-center justify-between`}>
          <div className="flex mx-16 ml-32 justify-end">
      {/*<NowPlaying />*/}
      
    </div>

    <div className="flex flex-row mx-auto justify-center items-center mt-16 max-w-3xl sm:p-4 mx-auto mb-16">
    <div className="rounded-full w-auto h-auto border-bl border-[1px] bg-transparent object-fit">
                    <Image
                      src="/favicon.ico"
                      width={150}
                      height={150}
                      alt="Picture of the author"
                    />
                </div>
    <div className={`${dilight.className} ml-8 mx-2 max-w-xl w-auto text-left justify-center text-lg`}>
    <strong className={`${direg.className}`}>Haya AlMajali &nbsp; / &nbsp;</strong>
    <strong className={`${direg.className} text-sm`}>Boston, MA</strong><br></br>
    &#8212; Studying Computer Science at Boston University. <br></br>
    &#8212; Operating on Drive, Discipline, & Creativity. <br></br>
    &#8212; Passionate about merging <strong className={`${direg.className}`}>Tech</strong>, <strong className={`${direg.className}`}>Product</strong> & <strong className={`${direg.className}`}>Design</strong>.

      </div>
    </div>


 {/* 
    <div className="flex flex-col justify-center items-center mt-16 max-w-3xl sm:p-4 mx-auto">

<div className={`mx-auto text-center lg:text-4xl text-3xl lg:max-w-6xl max-w-7xl z-100`}>
    <div className={`flex ${noereg.className} transform -translate-y-1/2 before:absolute before:inset-0 before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-caret bg-clip-text text-bl`}>
      &#8212; {displayText}
    </div>
  </div>
    </div>
  */}

    <div className="flex flex-row items-center justify-center mt-8">
    <Link href="/about" className={`${direg.className} rounded-full px-4 py-2 border-black text-bl transition-colors duration-300 ${animationCompleted ? ' text-black border-black hover:underline' : 'bg-transparent hover:underline'}`}>ABOUT</Link>
    <span className="mx-2"></span>
    <Link href="/product" className={`${direg.className} rounded-full px-4 py-2 border-black text-bl transition-colors duration-300 ${animationCompleted ? 'text-black border-black hover:underline' : 'bg-transparent hover:underline'}`}>WORK</Link>
    <span className="mx-2"></span>
    <Link href="/resume" className={`${direg.className} rounded-full px-4 py-2 border-black text-bl transition-colors duration-300 ${animationCompleted ? ' text-black border-black hover:underline' : 'bg-transparent hover:underline'}`}>RESUME</Link>
  </div>

  <div className="max-w-screen px-1 py-8 flex items-center sm:flex-row flex-col">
    <span className="mx-auto text-center text-gr text-sm">
      <div className="mb-4"></div>
      {/*
      <div className={`${dilight.className} text-sm text-bl`}>
        <strong className="text-sm italic">"I coded this website from scratch!"</strong><br />
        <strong className="text-sm">&#8212; Haya AlMajali</strong><br />
      </div>
*/}
        </span>
      </div>
      </main>
  );
}