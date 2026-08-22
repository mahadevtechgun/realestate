import React from 'react';

const PageLoader = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F1115]">
      {/* Animated Logo */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-[#0F1115] font-bold text-2xl animate-pulse">
          LE
        </div>
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20 animate-ping"></div>
      </div>

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin mb-5"></div>
      
      {/* Text with Dots Animation */}
      <div className="flex items-center gap-1">
        <p className="text-[#A0A0A0] text-sm font-medium tracking-wide">
          {text}
        </p>
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></span>
        </span>
      </div>
    </div>
  );
};

export default PageLoader;