"use client";
import { useState, useEffect } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from '../ContactModal';
import ContactPage from '../ContactPage';
{     /*fonts*/     }
const noereg = localFont({
  src: [
    {
      path: '../../fonts/noereg.ttf',
    }
  ],
})
const noeital = localFont({
  src: [
    {
      path: '../../fonts/noeital.ttf',
    }
  ],
})
const noe = localFont({
  src: [
    {
      path: '../../fonts/noe.ttf',
    }
  ],
})
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
    <main className={` bg-bg text-bl flex min-h-screen max-w-screen flex-col justify-center text-bl`}>

    <div className="text-center mt-8 mb-8">
    <h1 className={`${noeital.className} text-4xl text-bl`}>&#8212; About Me &#8212;</h1>
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
        <div className={`sm:w-${isDesktop ? '1/2 mx-auto' : 'full'} `}>
      {/*    <h1 className={`${noeital.className} text-xl text-bl mb-4 mt-4 max-w-md`}>Discipline, Collaboration and Creative Thinking.</h1> */}
                        <h1 className={`${noereg.className} max-w-md text-md text-bl text-left`}>
                            Currently a student at Boston University studying Computer Science & Visual Arts, set to graduate in May 2024.
                            <br />
                             <br />
                             In essence, I am a highly motivated person, driven by discipline, creativity and an insatiable thirst for learning. 
                             <br />
                            <br />
                             Passionate about Product Development and Management, I excel in collaborative environments where innovative ideas are materialized into impactful solutions. 
                             <br />
                            <br />
                            Equipped with a Bachelor's degree in Computer Science & experience spanning Software Engineering, AI Integration, Product Management & Design, I bring a versatile skill set to the table.
                            <br />
                            <br />
                            I'm excited to expand my knowledge & skill-set post grad &#8212; from crafting code & designs to leveraging technology to address real-world challenges & create impactful solutions for users.
                            
                            <br />
                            <br />
                            
                            
                         </h1>
                         <h1 className={`${didot.className} text-right mr-24 mt-4 text-sm`}>H M</h1>
  </div>
                      </div>
</section>


<div className="text-center mt-8 mb-8">
    <h1 className={`${direg.className} text-4xl text-bl`}></h1>
        </div>



              

                <div className="text-center mt-4 mb-4">
    <h1 className={`${direg.className} text-4xl text-bl`}>Let's Connect!</h1>
        </div>
        <div className="flex flex-row mx-2 justify-center">
        <a href="https://www.linkedin.com/in/hayamaj/" className="flex items-justify my-4 mx-2">
                <Image
                      src="/images/linkedin.png"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
        </a>
        <a href="mailto:hayamaj@bu.edu" target="_blank" aria-label="hayamaj@bu.edu" className="flex items-center mx-2">
                <Image
                      src="/images/email.png"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
        </a>
        </div>
        <h1 className={`${dimed.className} px-4 py-4 text-md mx-auto text-gr my-4 justify-center text-justify max-w-lg`}>Please don't hesitate to get in touch if you ever want to chat, share feedback, or simply connect! I'm always open to new conversations and will do my best to respond to you as soon as I can. </h1> 

        <ContactPage />



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

  );
}