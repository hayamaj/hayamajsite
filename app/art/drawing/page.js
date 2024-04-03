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
        <main className={`bg-bg flex min-h-screen max-w-screen flex-col items-center justify-between`}>
  
        <div className="w-screen h-screen overflow-y-scroll">
          <div className="text-center">
          <div className="pt-16 mt-8 mx-4 pb-4">
          <div className="flex items-baseline float-right">
      <Link href="/art/motiongraphics" className={`${didotdf.className} mx-4 bg-bg px-4 text-black text-black hover:underline`}>Motion Graphics &gt;</Link>
    </div>
    <div className="flex items-baseline float-left">
      <Link href="/art/photo" className={`${didotdf.className} mx-4 px-4 bg-bg text-black text-black hover:underline`}> &lt; Photography</Link>
    </div>
        </div>
          </div>
  
          <div className="flex flex-wrap justify-center my-16 mt-6 mx-8">
            <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191749/image-gallery/IN001.jpg" height={600} width={800} crop="auto" alt="Facebook" />
            <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191748/image-gallery/PC002.jpg" height={600} width={500} crop="auto" alt="Facebook" />
            <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191727/image-gallery/2021-6_yqsasb.jpg" height={600} width={500} crop="auto" alt="Facebook" />
  
          </div>
  
  
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
       </div>
      </main>
      )
  }