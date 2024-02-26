"use client";
import { useState, useEffect } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
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

export default function eng() {
    return (
        <main className={`bg-white min-h-screen ${dilight.className}`}>
          <div className="flex flex-col items-center">
          <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
      </div>

            <div className="container mx-auto px-4">

        <div className="text-center mt-16 mb-8">
        <h1 className={`${dimed.className} text-5xl text-black`}>Engineering & Computer Science</h1>
        </div>


{/* 
                <section className="my-16 text-neutral-900 text-xl max-w-screen-lg text-justify">
                    <h1 className={`${dilight.className} text-sm`}>Nearly a recent graduate with a <strong className={` ${dimed.className} text-neutral-900`}>B.S. in Computer Science </strong>
                        from Boston University, I offer a robust technical skill set and a strong academic foundation. 
                        My proficiency spans leading cross-functional teams as a Project Manager 
                        at <strong className={` ${dimed.className} text-black`}>BU Spark!</strong>, implementing cutting-edge AI solutions at <strong className={` ${dimed.className} text-black`}>Dakota Systems</strong>, 
                        and actively contributing to web development & marketing initiatives at companies like <strong className={` ${dimed.className} text-black`}>ZenHR </strong>.
                    </h1>
                </section>
*/}
              
                    <div className="flex flex-col my-2 mt-8">
                        <h1 className={`${direg.className} text-4xl my-2`}>Education</h1>
                        <h1 className={`${dilight.className} mb-4 text-xl`}><strong className={`${dimed.className} mb-4 text-2xl text-accent`}>2024</strong> &nbsp; B.Sc. in Computer Science, Boston University, Massachusetts, USA.</h1>
                        </div>
               
                <section className="my-4 text-black">
                    <h2 className={` ${direg.className} text-4xl text-left`}>Technical Skills</h2>
                
                <div className="max-w-screen-xl mx-auto flex flex-col my-2 max-w-screen">
                <div className="flex flex-wrap mx-auto justify-center">
                        <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/python.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/java.svg"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/ruby.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/tailwindcss.svg.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/SML.jpg"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/c.svg.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    
                        </div>
                    <div className="flex flex-col lg:flex-row mb-4 mt-4">
                        <h1 className={`${direg.className} text-xl text-accent`}>Languages</h1>
                        
                        
                        <div className="flex relative z-20 text-neutral-900 max-w-screen-md text-justify ml-4 mt-1">
                            <h1 className={`${dilight.className} text-neutral-900`}>
                                <li className="list-none">Python, Java, JavaScript, C, HTML, CSS, Ruby, SML</li>
                            </h1>
                        </div>
                    </div>

                        <div className="flex flex-wrap mx-auto justify-center max-w-xl">
                        <div className="flex items-justify mx-auto ">
                <Image
                      src="/images/nextjs.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/node.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/photoshop.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 -mt-2 ">
                <Image
                      src="/images/illustrator.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/aftereffects.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/figma.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                    </div>


                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/vercel.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/aws.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/heroku.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className="flex items-justify mx-4 ">
                <Image
                      src="/images/postg.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    </div>
                    
                        </div>

                    <div className="flex flex-col lg:flex-row mb-4 mt-4">
                        <h1 className={`${direg.className} leading-6 text-xl text-accent`}>Technologies/<br/>Frameworks</h1>
                        <div className="flex relative z-20 text-neutral-900 max-w-screen-md text-justify ml-4 mt-1">
                            <h1 className={`${dilight.className} text-neutral-900`}>
                            <li className="list-none">React, Node.js, Adobe, Rails, Figma, TailwindCSS, AWS, Heroku, PostreSQL, Vercel</li>
                            </h1>
                        </div>
                    </div>

                    






                </div>

                </section>


                <div className="flex flex-col my-4">
                <h1 className={`${direg.className} text-4xl my-2`}>Experience</h1>
                <div className="flex flex-wrap mx-auto justify-center max-w-4xl">
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
               

                        <div className="flex flex-col my-">
                        <h1 className={`${direg.className} text-4xl my-4`}>Resume</h1>
        <div className="mx-2 flex flex-row items-left text-center ">
          <button onClick={handleDownload} className={` ${direg.className} -mt-1 mr-4 w-5 h-5 rounded-full border border-2 border-accent bg-white hover:bg-accent`}></button>
          <button onClick={handleDownload} className={` ${dilight.className} mr-4 -mt-1 bg-white text-left text-black`}> &#8592; &nbsp; Click to download a PDF</button>

        </div>
                        </div>

                        <div className={`${didotdf.className} px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className="mx-auto text-center text-xs text-neutral-900">
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
            </div>
        </main>
    )
}