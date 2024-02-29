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




export default function Photo() {
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
      <main className={`bg-white flex min-h-screen max-w-screen flex-col items-center justify-between `}>

      <div className="w-screen h-screen overflow-y-scroll">
        <div className="text-center pt-16 my-24">
        <h1 className={`${didotdf.className} text-4xl`}>My Photography</h1>
        </div>

        <div className="flex flex-wrap justify-center my-16 mt-6 mx-8">
          <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332436/image-gallery/PH001.jpg" height={600} width={500} crop="auto" alt="Facebook" />
          <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1708466366/image-gallery/PH002.jpg" height={600} width={500} crop="auto" alt="Facebook" />
        </div>

    <div className="flex flex-wrap justify-center my-16 mt-6 mx-8">
    <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332438/image-gallery/PH003.tiff" height={600} width={800} crop="auto" alt="Facebook" />
    </div>

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
  </div>
    </main>
    )
}