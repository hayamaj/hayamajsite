"use client";
import Image from "next/image";
import Link from 'next/link';
import Navigation from '../Nav'; // Import the Navigation component
import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local';
import { CldImage } from 'next-cloudinary';
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
      <main className={` bg-bg text-bl flex h-screen flex-col justify-start mt-8 text-bl`}>
       <section className="flex flex-col"> {/* Add margin on small screens */}
  <div className="mx-auto justify-start">
    <div className="flex flex-col sm:flex-row items-center">
      <div className="overflow-hidden mb-8 sm:max-h-screen sm:max-w-screen w-screen h-[400px]"> {/* Wrap video in a rounded container */}
        <video autoPlay loop playsInline muted className="object-cover w-screen h-full">
          <source src="/drawingvid.mov" />
        </video>
      </div>
    </div>
  </div>
</section>

<div className="mx-8 my-4">
<h1 className={`${direg.className} flex justify-center text-center text-xl my-2 text-gr `}> PAINTING</h1>

        <div className="flex flex-row justify-center mt-6 ">
          <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP001.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
          <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337200/image-gallery/OP002.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
          <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337200/image-gallery/OP003.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>

        </div>

        <div className="flex flex-row justify-center ">
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332899/image-gallery/OP004.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191747/image-gallery/OP006.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191748/image-gallery/OP004XX.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
        </div>

        <h1 className={`${direg.className} mt-4 flex justify-center text-center text-xl text-gr mb-8 mt-8`}> MOTION GRAPHICS</h1>

        <div className="flex justify-center mt-0 mx-8">
              <video autoPlay muted loop style={{ width: 'full', height: 'full' }}>
          <source src="/MG01.mp4" className="" />
        </video>
        </div>

        <h1 className={`${direg.className} flex justify-center text-center text-xl my-2 text-gr my-8`}> DRAWING</h1>


        <div className="flex flex-row justify-center mt-6">
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191749/image-gallery/IN001.jpg" height={600} width={800} crop="auto" alt="Facebook" /></div>
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191748/image-gallery/PC002.jpg" height={600} width={500} crop="auto" alt="Facebook" /></div>
        <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191727/image-gallery/2021-6_yqsasb.jpg" height={600} width={500} crop="auto" alt="Facebook" /></div>
  
          </div>

        <div>
        <h1 className={`${direg.className} flex justify-center text-center text-xl my-2 text-gr my-8`}> PHOTOGRAPHY</h1>

        <div className="flex justify-center my-16 mt-6 mx-8">
          <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332436/image-gallery/PH001.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
          <div className="m-1"><CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1708466366/image-gallery/PH002.jpg" height={400} width={300} crop="auto" alt="Facebook" /></div>
        </div>

        </div>

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

    </main>
    )
}