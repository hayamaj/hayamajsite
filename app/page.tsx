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
    <main className={`animate-custom items-center justify-center`}>
          <div className="flex justify-end">
      {/*<NowPlaying />*/}
      
    </div>

    <div className="flex flex-row mx-auto justify-center items-center mt-4 sm:p-4 mb-16">
  <div className="rounded-full border-black border-[1px] bg-transparent object-fit hidden sm:block">
    <Image
      src="/images/profpic.png"
      width={130}
      height={130}
      alt="me"
    />
  </div>
  <div className={`${dilight.className} ml-8 mx-2 leading-2 w-auto text-left justify-center sm:text-base`}>
    <strong className={`${direg.className} text-xl`}>Haya &nbsp; <strong className={`${dilight.className}`}>(hey-ya)</strong></strong><br></br>
    <strong className={`${direg.className}`}>Boston, MA</strong> <br></br><br></br>
    &bull; &nbsp;Computer Science at <strong className={`${direg.className}`}>Boston University</strong>.<br></br>
    &bull; &nbsp;Operating on <strong className={`${direg.className}`}>Drive</strong>, <strong className={`${direg.className}`}>Discipline</strong>, & <strong className={`${direg.className}`}>Creativity</strong>. <br></br>
    &bull; &nbsp;Passionate about merging <strong className={`${direg.className}`}>Tech</strong>, <strong className={`${direg.className}`}>Product</strong> & <strong className={`${direg.className}`}>Design</strong>.
  </div>
  
</div>
<div className="flex flex-row items-center justify-center text-sm">
    <Link href="/about" className={`${dilight.className} rounded px-4 py-1 border-bl text-bg transition-colors border border-bl bg-black rounded-full`}>About</Link>
    <span className="mx-2"></span>
    <Link href="/product" className={`${dilight.className} rounded px-4 py-1 border-bl text-bg transition-colors border border-bl bg-black rounded-full`}>Work</Link>
    <span className="mx-2"></span>
    <Link href="/resume" className={`${dilight.className} rounded px-4 py-1 border-bl text-bg transition-colors border border-bl bg-black rounded-full`}>Resume</Link>
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