"use client";
import Image from "next/image";
import Link from 'next/link';
import Navigation from '../../Nav'; // Import the Navigation component
import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local'
import { CldImage } from 'next-cloudinary';

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

export default function MotionGraphics() {
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
  
        <div className="w-screen h-screen overflow-y-scroll">
          <div className="text-center mt-24">
          <h1 className={`${didotdf.className} text-4xl`}>Motion Graphics Projects</h1>
          </div>
  
        <div className="flex flex-wrap justify-center my-8 mt-0 mx-8">
              <video autoPlay muted loop style={{ width: '800px', height: '800px' }}>
          <source src="/MG01.mp4" className="top-1/2 left-1/2" />
        </video>
        </div>
  
  
  
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
       </div>
      </main>
      )
  }