"use client";
import { useState, useEffect, ChangeEvent } from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

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

  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const toggleProjectsVisibility = () => {
    setIsProjectsVisible(!isProjectsVisible);
  };

  const [isArtworkVisible, setIsArtworkVisible] = useState(false);

  const toggleArtWorkVisibility = () => {
    setIsArtworkVisible(!isProjectsVisible);
  };

  const [isTechStackVisible, setIsTechStackVisible] = useState(false);

  const toggleTechStackVisibility = () => {
    setIsTechStackVisible(!isTechStackVisible);
  };

  return (

    <main className={` items-center justify-center h-screen`}>
      {/* Section 1 - Intro */}
      <section id="section1" className="flex flex-col sm:flex-row mx-auto justify-center items-start my-6 sm:p-4 mb-12">
  <div className="rounded-full phone:ml-8 phone:mb-2 border-transparent border-[1px] bg-transparent overflow-hidden w-32 h-32">
    <div className="flex">
      <Image
        src="/images/me.JPG"
        width={150}
        height={150}
        alt="me"
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  <div className={`${dilight.className} ml-8 mx-2 leading-2 w-auto text-left justify-center sm:text-base`}>
    <div className="inline-flex items-center text-justify">
      <strong className={`${direg.className} text-4xl`}>Haya&nbsp;<strong className={`${dilight.className}`}>(hey-ya)</strong>&nbsp;</strong>
      <a href="https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM?si=55ec7143e6af4f44" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faVolumeUp} className="ml-2" />
      </a>
    </div>
    <br />
    <strong className={`${direg.className} mt-2 text-bl`}>New York, New York.</strong>
    <br /><br />
    I'm Haya, and I just graduated from Boston University <strong className={`italic text-gr`}>(woohoo!)</strong>. <br />I'm a software developer based in New York, specializing in
    <strong className={`${direg.className}`}> JavaScript</strong>,     <br /><strong className={`${direg.className}`}>TypeScript</strong>, <strong className={`${direg.className}`}>React</strong>, and <strong className={`${direg.className}`}>Next.js</strong>. 
    I'm a quick learner with a creative eye <br /> and a passion for merging Tech, Product & Design.
    <br />
    <p className={`${dilight.className} mt-6`}>Reach Me:</p>
    <p>&bull; &nbsp;<a href="mailto:hayamaj02@gmail.com" className="underline">Email</a></p>

    <p>&bull; &nbsp; <a href="https://www.linkedin.com/in/hayamaj" className="underline">LinkedIn</a></p>
    <p>&bull; &nbsp;<a href="https://github.com/hayamaj" className="underline">Github</a></p>
    <p className={`${dilight.className} mt-4`}>Download My Resume:</p>
    <a
  href="/AlMajali-Resume.pdf"
  download="AlMajali-Resume.pdf"
  className="text-bl flex text-left"
>
  &bull; &nbsp; <strong className={`${dilight.className} underline`}>AlMajali-Resume</strong>
</a>

<p className={`${dilight.className} mt-6`}>My Values:</p>
&bull; <Link href="/about" className={`${dilight.className} text-bl underline`}>About Me</Link>


<p className={`${dilight.className} mt-6`}>Creative Work:</p>
&bull; <Link href="/art" className={`${dilight.className} text-bl underline`}>Creative</Link>
  </div>
</section>


<section id="section3" className="px-8 bg-transparent mb-4">
  <h1
    className={`${direg.className} lg:ml-96 flex justify-center phone:justify-start text-center text-xl text-black cursor-pointer`}
    onClick={toggleTechStackVisibility}
  >
    My Tech Stack &nbsp;
    <img
      src={`https://unpkg.com/lucide-static@latest/icons/chevron-${isTechStackVisible ? 'up' : 'down'}.svg`}
      alt="Toggle"
      className="w-5 h-5 mt-1"
    />
  </h1>
  {isTechStackVisible && (
    <section className="max-w-2xl mx-auto p-8">
      <div className="flex flex-col">
        {/* Software Dev */}
        <div className="flex flex-col phone:flex-row mb-4">
          <h2 className={`${direg.className} text-bl text-md`}>Software Development</h2>
          <p className={`${dilight.className} text-sm text-black phone:ml-8`}>JavaScript, TypeScript, React, Next.js</p>
        </div>
        {/* Product Management */}
        <div className="flex flex-col phone:flex-row mb-4">
          <h2 className={`${direg.className} text-bl text-md`}>Product Management</h2>
          <p className={`${dilight.className} text-sm text-black phone:ml-8`}>Jira, Trello, Slack, Atlassian, Google Suites</p>
        </div>
        {/* Design */}
        <div className="flex flex-col phone:flex-row">
          <h2 className={`${direg.className} text-bl text-md`}>Product Design</h2>
          <p className={`${dilight.className} text-sm text-black phone:ml-8`}>
            Creative Cloud Apps (Photoshop, Illustrator, Premiere Pro, After Effects...)
          </p>
        </div>
      </div>
    </section>
  )}
</section>

<section id="section2" className="px-8 bg-transparent">
  <h1
    className={`${direg.className} lg:ml-96 flex justify-center phone:justify-start text-center text-xl text-black cursor-pointer`}
    onClick={toggleProjectsVisibility}
  >
    My Projects &nbsp;
    <img
      src={`https://unpkg.com/lucide-static@latest/icons/chevron-${isProjectsVisible ? 'up' : 'down'}.svg`}
      alt="Toggle"
      className="w-5 h-5 mt-1"
    />
  </h1>
  {isProjectsVisible && (
    <div className="mt-4 mx-auto max-w-2xl flex flex-col phone:flex-row justify-start items-center pb-12">
      <div className="flex items-center justify-center mb-4 phone:mb-0 phone:mr-4">
        <Image
          src="/images/dibsscreen.png"
          width={150}
          height={150}
          alt="Project image"
        />
      </div>
      <div className="flex flex-col justify-center items-center phone:items-start">
        <h2 className="mt-4 text-3xl text-black text-left mb-1">
          A Digital Thrift Store Solution to Campus Waste Management
        </h2>
                <Link href="/product/dibs" className="mt-4 text-sm text-blue-500 flex ml-10 text-left mb-1 hover:underline">
                  View Project &#8594;
                </Link>
                </div>
    </div>
  )}
</section>




  <div className="max-w-screen px-1 pt-8 flex items-center sm:flex-row flex-col">
    <span className="mx-auto text-center text-gr text-sm">
        <div className="flex flex-row mx-2 justify-center">
        <a href="https://www.linkedin.com/in/hayamaj/" className="flex items-justify my-4 mx-2">
                <Image
                      src="/images/linkedin.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    />
        </a>
        <a href="mailto:hayamaj@bu.edu" target="_blank" aria-label="hayamaj@bu.edu" className="flex items-center mx-2">
                <Image
                      src="/images/email.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    />
        </a>
        <a href="mailto:hayamaj@bu.edu" target="_blank" aria-label="hayamaj@bu.edu" className="flex items-center mx-2">
                <Image
                      src="/images/github.jpeg"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    />
        </a>
        </div>
        </span>
      </div>
      </main>
  );
}