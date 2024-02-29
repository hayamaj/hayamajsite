"use client";
import { useState, useEffect } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from '../ContactModal';
import ContactPage from '../ContactPage';
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

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width on component mount
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640); // Adjust threshold as needed
    };

    handleResize(); // Call once to set initial state

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={`bg-bg text-bl flex min-h-screen max-w-screen flex-col justify-center text-bl`}>

    <div className="text-center mt-8 mb-8">
    <h1 className={`${direg.className} text-4xl text-bl`}>About Me</h1>
        </div>

                    

        <section className="flex flex-col mx-4 sm:mx-12"> {/* Add margin on small screens */}
        <div className="flex flex-col sm:flex-row mx-auto items-center">
        {isDesktop && (
          <div className="lg:ml-36 w-auto sm:w-1/2 sm:pr-4 mb-4 sm:mb-0 mx-4">
            <video autoPlay loop playsInline muted className="w-auto">
              <source src="/aboutvid.mov" />
            </video>
          </div>
    )}
        <div className={`sm:w-${isDesktop ? '1/2' : 'full'} `}>
          <h1 className={`${direg.className} text-2xl text-gr mb-4 mt-4 max-w-md`}>Aspiring Product Leader, Engineer & Creative.</h1>
                        <h1 className={`${dilight.className} max-w-md text-sm text-bl text-left`}>
                            I am a Jordanian-born student at Boston University, set to graduate in May 2024.
                            <br />
                             <br />
                            I always thought I'd grow up to be a painter.
                            As a child, I thrived on the creativity and the act of bringing ideas to life, but I also found the solitary nature of the artist's life stifling.
                            While I was confident in my passion to create, I knew that I also excelled most when collaborating with other creative minds. 
                            <br /> 
                            <br />
                            In college, I decided to major in Computer Science & Technology (with a minor in Visual Arts).
                            Despite its apparent contradiction to my collaborative aspirations,
                            I recognized the digital landscape as the frontier of new and innovative ideas. So, 
                            I sought to learn and master this new language.
                            <br />
                            <br />
                            Throughout my academic journey, I actively sought out leadership and facilitation roles to maintain a sense of collaboration.
                            Whether representing BU as a student facilitator or engaging in clubs like Women in Computer Science & Club Tennis, I pursued opportunities for teamwork.
                            Additionally, my involvement in programs like the Spark! internship and a fellowship for aspiring product managers further honed my skills in project management and product development.

                            Now, equipped with a diverse skill set ranging from leadership to engineering and design, I want to guide teams in the pursuit of innovative solutions that can enrich our lives.
                            At this point in my life, I've crafted a diverse skill-set &#8212; from leadership roles to acquired engineering, product management, 
                            and design skills. 
                            <br />
                            <br />
                            Regardless of where my journey begins, my ultimate goal is to guide and facilitate teams in the creation of transformative solutions.
                            
                         </h1>
                         <h1 className={`${didot.className} text-left mt-4 text-sm`}>H M</h1>
  </div>
                      </div>
</section>


<div className="text-center mt-8 mb-8">
    <h1 className={`${direg.className} text-4xl text-bl`}></h1>
        </div>

        <section className=" mx-auto">
        <div className="flex flex-col my-4">
        <h1 className={`${direg.className} flex justify-center text-center text-4xl my-2`}>Skills & Experience</h1>

        <div className="flex flex-wrap mx-auto justify-center mt-8">
                <div className="flex flex-col items-center mx-4">
        <Image
              src="/images/ai.png"
              width={180}
              height={180}
              alt="Picture of the author"
            />
            <h1 className={`${dimed.className} text-center text-2xl mt-2`}>Artificial Intelligence</h1>
            <h1 className={`${dilight.className} text-center text-sm`}>AI Integration & Solutions Engineer</h1>
            </div>
            <div className="flex flex-col items-center mx-4 ">
        <Image
              src="/images/swe.png"
              width={180}
              height={180}
              alt="Picture of the author"
            />
            <h1 className={`${dimed.className} text-center text-2xl mt-2`}>Software Development</h1>
            <h1 className={`${dilight.className} text-center text-sm`}>Software Engineering Intern</h1>
            </div>
            <div className="flex flex-col items-center mx-4 ">
        <Image
              src="/images/pm.png"
              width={180}
              height={180}
              alt="Picture of the author"
            />
            <h1 className={`${dimed.className} text-center text-2xl mt-2`}>Project Management</h1>
            <h1 className={`${dilight.className} text-center text-sm`}>Software Project Manager</h1>
            </div>
            
                </div>

                </div>
       

                </section>

                <div className="text-center mt-8 mb-8">
    <h1 className={`${direg.className} text-4xl text-bl`}>Let's Connect</h1>
        </div>

        <ContactPage />



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
      </main>

  );
}