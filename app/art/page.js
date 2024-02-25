"use client";
import Image from "next/image";
import Link from 'next/link';
import Navigation from '../Nav'; // Import the Navigation component
import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local'
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


export default function Art() {
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
      <Navigation isIndexPage={true} class="sticky" /> {/* Use the Navigation component here */}
      </div>

      <div className="flex flex-col justify-center items-center h-screen z-100" >
    <video ref={videoRef} autoPlay="autoplay" playsInLine="playsinline" muted="true" onTimeUpdate={handleVideoTimeUpdate} className="w-full h-full object-cover object-right-bottom">
                      <source src="/drawingvid.mov" />
                      </video>
                      </div>

                      <div className={` ${didotdf.className} text-center  z-100 absolute align-middle top-80 text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white `}>
                        <Link href="/art/painting" className="mx-2 hover:underline decoration-1 underline-offset-2">Painting</Link>&#8212;
                        <Link href="/art/photo" className="mx-2 hover:underline decoration-1 underline-offset-2">Photography</Link>&#8212;
                        <Link href="/art/drawing" className="mx-2 hover:underline decoration-1 underline-offset-2">Drawing</Link>&#8212;
                        <Link href="/art/motiongraphics" className="mx-2 hover:underline decoration-1 underline-offset-2">Motion Graphics</Link>
          </div>


          <div className={`${didotdf.className} px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className="mx-auto text-center text-xs text-neutral-900">
          <div className="mb-4">
          <Link href="/about" className="underline decoration-1 underline-offset-2 mx-2">About</Link>
          <Link href="/contact" className="underline decoration-1 underline-offset-2 mx-2">Contact</Link> <br />
          </div>
          <div>
          hayamaj@bu.edu <br />
          [857] 891 - 8848 <br />
          </div>
        </span>
      </div>

    </main>
    )
}