import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F1115] flex items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] transition-all duration-300 group animate-fade-up"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-30"></span>
        </button>
      )}
    </>
  );
};

export default ScrollTop;