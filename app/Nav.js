"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import localFont from 'next/font/local'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';



function NavLink({ href, exact = false, children, activeColor, ...props }) {
  const pathname = usePathname();
  
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  console.log('pathname:', pathname);
console.log('href:', href);
console.log('isActive:', isActive);
console.log('color:', activeColor);

const linkClasses = `${props.className || ''} ${isActive ? 'text-bl' : 'text-gr'}`;



return (
  <Link legacyBehavior href={href} passHref>
    <a
      {...props}
      className={linkClasses.trim()} // Trim to remove any extra spaces
    >
      {children}
    </a>
  </Link>
);
}


export { NavLink };

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


export const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className={`bg-bg `}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-items-left">
              <h1 className={`${direg.className} text-center text-bl text-3xl cursor-pointer`} onClick={handleNameClick}>
                HAYA ALMAJALI
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex absolute right-24">
            <div className="ml-auto">
              <div className={` ${direg.className} flex space-x-8 text-gr`}>
              <NavLink href="/" exact className="nav-item nav-link"></NavLink>
              <NavLink href="/product" exact className="nav-item nav-link">Work</NavLink>
              <NavLink href="/resume" exact className="nav-item nav-link">My Resume</NavLink>
              <NavLink href="/about" exact className="nav-item nav-link">About + Connect</NavLink>
              <NavLink href="" exact className="nav-item nav-link">|</NavLink>
              <NavLink href="/art" exact className="nav-item nav-link">Design</NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div className={` ${direg.className} md:hidden fixed bg-bg w-screen h-full z-50 items-center justify-center`} id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-8 my-24 sm:px-3 justify-center text-center">
              <Link legacyBehavior href="/product" passHref>
                <a onClick={() => setIsOpen(false)} className="text-bl hover:text-gr block px-3 py-2 rounded-md text-2xl">Work</a>
              </Link>
              <Link legacyBehavior href="/resume" passHref>
                <a onClick={() => setIsOpen(false)} className="text-bl hover:text-gr block px-3 py-2 rounded-md text-2xl">My Resume</a>
              </Link>
              <Link legacyBehavior href="/about" passHref>
                <a onClick={() => setIsOpen(false)} className="text-bl hover:text-gr block px-3 py-2 rounded-md text-2xl">About + Connect</a>
              </Link>
              <Link legacyBehavior href="/art" passHref>
                <a onClick={() => setIsOpen(false)} className="text-bl hover:text-gr block px-3 py-2 rounded-md text-2xl">Design</a>
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};


export default Navigation;