// ContactPage.tsx
"use client";

import React, { useState } from 'react';
import ContactModal from './ContactModal';
import localFont from 'next/font/local'

const direg = localFont({
    src: [
      {
        path: '../fonts/direg.otf',
        weight: '400'
      }
    ],
  })

const ContactPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Button or link to open the modal */}
      <button onClick={handleOpenModal} className={`${direg.className} border hover:bg-black hover:text-white rounded-full px-4 py-2 text-bl border-bl`}>Contact Me</button>
      {/* Render the modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ContactPage;