import React from 'react';
import Link from 'next/link';
import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
const inter300 = Inter({ subsets: ['latin'], weight: ['300'] });
const inter500 = Inter({ subsets: ['latin'], weight: ['500'] });
import localFont from 'next/font/local'

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




const Navigation = ({ isIndexPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  const handleNameClick = () => {
    window.location.href = '/'; // Redirect to the home page
  };
 


  return (
  <div className="flex">
    <div className="flex justify-between items-center">
        <div className="flex flex-col absolute left-8 top-8 z-50">
      <h1 className={`${didot.className} text-center text-3xl ${isIndexPage ? `${didot.className}` : `${direg.className}`} ${isIndexPage ? 'text-white ' : 'text-accent '}  ${isIndexPage ? 'text-5xl' : 'text-xl'}`} onClick={() => handleNameClick()}>Haya AlMajali</h1>
    </div>
</div>
    {/*
    <div className={` ${inter300.className} lg:block top-4 right-4 absolute flex flex-col text-sm text-neutral-950`}>
      <Link href="/contact" class=" mx-1"></Link>
      <p className={`${inter300.className} -mt-4 `}></p>
    </div>
    <div className={`absolute top-2 right-10 ${inter300.className} text-sm hidden lg:flex flex-row mt-2`}>
  <Link href="/contact" className="text-neutral-700 mt-2 text-justify hover:text-pm-light">contact</Link>

</div>
  */}




<div className="absolute top-8 right-8 z-40">
  <button className={`outline-none mobile-menu-button ${isIndexPage ? 'text-white' : 'text-accent'}`} onClick={toggleSidebar}>
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" onClick={isSidebarOpen ? toggleSidebar : undefined}></path>
    </svg>
  </button>
</div>




<div className="absolute top-8 right-8 z-50">
  {isSidebarOpen && (
    <button className="outline-none mobile-menu-button text-accent" onClick={toggleSidebar}>
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  )}
</div>


    {/* Sidebar */}
    {isSidebarOpen && (
      <div className="z-40 bg-white fixed top-0 right-0 w-screen h-full shadow-sm sidebar">

        <div className="my-48 text-center">
          <Link href="/product" className={` ${didotdf.className} text-neutral-950 my-4 mt-2 block text-2xl decoration-1 hover:underline underline-offset-4 whitespace-nowrap`}>Product</Link>
          <Link href="/eng" className={` ${didotdf.className} text-neutral-950 mt-2 my-4 block text-2xl decoration-1 hover:underline underline-offset-4`}>Eng</Link>
          <Link href="/art" className={` ${didotdf.className} text-neutral-950 mt-2 my-4 block text-2xl decoration-1 hover:underline underline-offset-4`}>Design</Link>
          <Link href="/contact" className={` ${didotdf.className} text-accent block text-sm mt-48 decoration-1 hover:text-neutral-200 hover:underline underline-offset-4`}>Contact</Link>
          <Link href="/about" className={` ${didotdf.className} text-accent mt-1 block text-sm decoration-1 hover:text-neutral-200 hover:underline underline-offset-4`}>About</Link>
        </div>
      </div>
    )}
  </div>
    
  );
};

export default Navigation;