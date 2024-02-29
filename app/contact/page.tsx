"use client";
import { useRef, useState, useCallback, useEffect } from 'react';
import Navigation from '../Nav'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from 'react-icons/ai';


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


export default function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const [submitResult, setSubmitResult] = useState<
    'success' | 'failure' | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit() {
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.REACT_APP_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY || !form.current) {
      console.error(
        'EmailJS environment variables or form reference are not defined'
      );
      return;
    }

    try {
      await emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.EMAILJS_PUBLIC_KEY);
      setSubmitResult('success');
      setIsModalOpen(true);
      reset();
    } catch (error) {
      setSubmitResult('failure');
      setIsModalOpen(true);
    }
  }
  

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <main className={`bg-white text-black flex min-h-screen max-w-screen flex-col items-center justify-between text-black`}>
  
    <div className="text-center mt-24 mb-8">
    <h1 className={`${dimed.className} text-5xl text-black`}>Let's Get in Touch!</h1>
        </div>

        <main className="flex-1 p-4" style={{ paddingTop: '1rem' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-neutral-950 mb-4">
            If you'd like to reach out to me or report a bug on my website,
            please fill out the form below with your name, email, and a message.
            <br />
            You can also directly email me at{' '}
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ? (
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="text-blue-400 underline"
              >
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            ) : (
              '(Fetching email address...)'
            )}
            <a>.</a>
            <br />
            <br />
            I&lsquo;ll get back to you as soon as possible!
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 justify-center max-w-screen"
          >
            <input
              {...register('name', { required: true })}
              placeholder="Your Name"
              className="w-80 mr-4 p-2 border border-gray-300 rounded text-black"
            />
            {errors.name && (
              <span className="text-red-500">This field is required.</span>
            )}

            <input
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please provide a valid email address.',
                },
              })}
              placeholder="Your Email Address"
              className="w-80 mx-0 p-2 border border-gray-300 rounded text-black"
            />
            {errors.email && typeof errors.email.message === 'string' && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <textarea
              {...register('message', {
                required: 'This field is required.',
                minLength: {
                  value: 10,
                  message: 'Your message must be at least 10 characters.',
                },
              })}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded text-black"
              rows={4}
            />
            {errors.message && typeof errors.message.message === 'string' && (
              <span className="text-red-500">{errors.message.message}</span>
            )}

            <input
              type="submit"
              className="w-80 mx-48 p-2 bg-black text-white text-center rounded cursor-pointer hover:bg-art"
            />
          </form>
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`p-8 rounded shadow-lg relative flex items-center justify-center ${
              submitResult === 'success' ? 'bg-green-200' : 'bg-red-200'
            }`}
          >
            {' '}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose size={24} />
            </button>
            <div className="">
              {submitResult === 'success' && (
                <div className="flex flex-col items-center justify-center">
                  <AiOutlineCheckCircle
                    className="text-green-500 animate-bounce"
                    size={50}
                  />
                  <p className="text-green-900 text-lg font-bold text-center">
                    Successfully submitted form!
                  </p>
                </div>
              )}
              {submitResult === 'failure' && (
                <div className="flex flex-col items-center justify-center">
                  <AiOutlineCloseCircle
                    className="text-red-500 animate-bounce"
                    size={50}
                  />
                  <p className="text-red-500 text-lg font-bold text-center">
                    Failed to submit form. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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


 
