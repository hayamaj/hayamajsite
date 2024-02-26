"use client";
import { useState, useEffect } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
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

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
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

  const handleVideoEnd = () => {
    setVideoEnded(true);
    console.log("works");
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
    <main className={`bg-white text-blacks flex min-h-screen max-w-screen flex-col items-center justify-between text-black`}>
    <div className="flex flex-col items-center">
        <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
    </div>

    <div className="text-center mt-24 mb-8">
    <h1 className={`${dimed.className} text-5xl text-black`}>About Me</h1>
        </div>

        <section className="flex flex-col justify-center items-center mx-4 sm:mx-8"> {/* Add margin on small screens */}
        <div className="w-full flex flex-col sm:flex-row"> {/* Use flexbox for layout */}
    {/* Conditionally render the video based on screen size */}
    {window.innerWidth > 640 && (
      <div className="w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0"> {/* Adjust width and spacing */}
      <video autoPlay loop playsInline muted className="w-full">
          <source src="/aboutvid.mov" />
        </video>
      </div>
    )}
    <div className="w-full sm:w-1/2">
    <h1 className="text-lg mb-2">Hi! I'm Haya.</h1>
                        <h1 className={`${dilight.className} text-sm text-black text-justify`}>
                            I am a Jordanian-born student at Boston University, on track to graduate in May 2024.
                            <br />
                             <br />
                            I always thought I'd grow up to be a painter.
                            <br /> 
                            I spent my childhood drawing & painting. I loved creating new things & bringing ideas to life, & yet I hated the solitude of the lifestyle.
                            <br /> 
                            <br /> 
                            I've always been confident about two things: <br /> 
                            1. My desire to create  <br /> 
                            2. My desire to lead a lifestyle of collaboration & interaction with others. <br /> 
                            <br />
                            In college, I decided to major in Computer Science & Technology with a minor in Visual Arts.
                            Recognizing the digital landscape as the emerging frontier of innovation,
                            I wanted to learn language through which modern ideas were being brought to life, so I could one day do so with my own.
                            <br />
                            <br />
                            Amongst academics, I sought leadership & facilitation roles. 
                            From representing BU as a student facilitator to joining clubs like Women in Computer Science &
                            Club Tennis. I also joined the Spark! program at Boston university, where I interned as a project manager, 
                            & participated in a fellowship & mentorship program for aspiring product managers looking to bring their products to fruition.

                            At this point in my life, I've crafted a diverse skill-set &#8212; from leadership roles to acquired engineering, product management, 
                            & design skills. 
                            <br />
                            <br />
                            Regardless of the starting point, my ultimate aim is to guide & facilitate teams in the creation of new innovative solutions to enhance our lives.
                            
                         </h1>
                         <h1 className={`${didot.className} text-right mt-4 text-sm`}>H M</h1>
                      </div>
                      </div>
</section>

{/*resume stuff, figure out where to put*/}

{/*
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center hover:no-underline ">
          <button onClick={handleDownload} className={`${inter300.className} px-2 md:mt-4 text-sm text-neutral-800 hover:text-neutral-800`}>download my resume.</button>
          <button onClick={handleDownload} className={`w-3 h-3 my-4 border border-neutral-950 bg-white hover:bg-neutral-950`}></button>

        </div>
      </div>
                  */}

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

  );
}