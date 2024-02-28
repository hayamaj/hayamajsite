"use client";

import { useState, useEffect, ChangeEvent } from 'react';
// Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Navigation from './Nav'
import Image from 'next/image';

{     /*fonts*/     }
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

  {/*resume, not sure if still needed here.*/}
  const handleDownload = () => {
    const pdfUrl = '/AlMajali-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'AlMajali-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={`${videoEnded ? 'bg-white' : ''} min-h-screen max-w-screen items-center justify-between`}>
    <div className={`flex flex-col items-center`}>
        <Navigation isIndexPage={isIndexPage} /> {/* Use the Navigation component here */}
    </div>
<div className={`flex flex-col justify-center items-center h-screen z-100 ${videoEnded ? 'opacity-5' : 'opacity-100'}`} >
    <video autoPlay playsInline muted onEnded={handleVideoEnd} className="w-full h-full object-cover object-right-bottom">
                      <source src="/introvid.mov"/>
                      </video>
                      </div>

          <div className={` ${dilight.className} opacity-0 z-100 absolute top-1/2 ml-12 text-left transition-opacity duration-1000 ${videoEnded ? 'opacity-100' : ''} text-5xl md:text-4xl [text-wrap:balance] bg-clip-text text-black `}>An aspiring <strong className={` ${direg.className} underline decoration-1 underline-offset-2 text-black `}>product leader</strong> with expertise in <span className=" text-white inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className={` ${diboldital.className} block animate-text-slide-3 text-justify text-accent leading-tight [&_li]:block`}>
            <li className="whitespace-nowrap">PRODUCT MGMT</li>
            <li>ENGINEERING</li>
            <li>DESIGN</li>
            <li aria-hidden="true">PRODUCT MGMT</li>
          </ul>
          </span>
          <Link href="/product" className="flex flex-row-reverse mx-24 my-16">
          <Image
                      src="/images/right-arrow.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </Link>
      </div>



<div className={`${didotdf.className} ${videoEnded ? 'bg-white' : 'bg-white'} max-w-screen px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className={`mx-auto text-center text-xs`}>
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