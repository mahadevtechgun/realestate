import React from 'react';

function GlobalLoader() {
  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#121418] to-[#121418] z-[9999] overflow-hidden m-0 p-0">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-backgroundShift"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-[400px] px-5 animate-fadeInUp">
        
        {/* Logo with Ring - Made container bigger */}
        <div className="relative w-[150px] h-[150px] flex justify-center items-center flex-shrink-0">
          <a className="flex items-center gap-3 shrink-0" href="/">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-[#0F1115] font-bold text-sm">
              LE
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-wider text-white">LUXURY</p>
              <p className="text-[8px] tracking-[0.3em] text-[#A0A0A0]">ESTATES</p>
            </div>
          </a>
          
          {/* Spinning Ring - Now properly contained inside parent */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-white border-r-white animate-spin shadow-[0_0_30px_rgba(255,255,255,0.1)]"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-[280px] h-1 bg-white/20 rounded-full overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] flex-shrink-0">
          <div className="w-0 h-full bg-gradient-to-r from-white via-[#f0f0ff] to-white rounded-full animate-progress relative shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <div className="absolute right-0 -top-0.5 w-5 h-2 bg-white/80 rounded-full blur-[4px]"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-sm font-medium tracking-[3px] uppercase m-0 opacity-90 animate-textPulse font-sans">
          Loading...
        </p>

        {/* Dots */}
        <div className="flex gap-2 -mt-2.5">
          <span className="w-2 h-2 bg-white rounded-full opacity-30 animate-dotBounce"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-30 animate-dotBounce animation-delay-200"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-30 animate-dotBounce animation-delay-400"></span>
        </div>
      </div>
    </div>
  );
}

export default GlobalLoader;