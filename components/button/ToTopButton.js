"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import {IoArrowUp} from "react-icons/io5"

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false); // State for button visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset; // Cross-browser support
      setIsVisible(scrollY > 100); // Button appears after 100px scroll (customize)
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <div
      className={`fixed bottom-3 right-3 z-[99] rounded-full bg-neutral bg-opacity-80 text-neutral-content shadow-sm 
                ${isVisible ? '' : 'hidden'}`} // Toggle visibility based on state
    >
      <button id="boton-ir-arriba" className="text-5xl" onClick={scrollToTop} aria-label='Subir hasta arriba de la página'>
        <IoArrowUp />
      </button>
    </div>
  );
}
