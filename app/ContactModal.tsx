// ContactModal.tsx
"use client";
import React from 'react';

import { useRef, useState, useCallback, useEffect } from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from 'react-icons/ai';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="p-8 rounded shadow-lg relative flex items-center justify-center bg-white">
            <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
              <AiOutlineClose size={24} />
            </button>
            {/* Form content goes here */}
            <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 justify-center items-center max-w-md"
          >
            <input
              {...register('name', { required: true })}
              placeholder="Your Name"
              className="w-full mr-4 p-2 border border-gray-300 text-bl"
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
              className="w-full mx-0 p-2 border border-gray-300 text-bl"
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
              className="w-full p-2 border border-gray-300 text-bl"
              rows={4}
            />
            {errors.message && typeof errors.message.message === 'string' && (
              <span className="text-red-500">{errors.message.message}</span>
            )}

            <input
              type="submit"
              className="w-full p-2 bg-black text-white text-center rounded cursor-pointer hover:bg-gr"
            />
          </form>
      
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;