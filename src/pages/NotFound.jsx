import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import PageLoader from '../components/ui/PageLoader';

const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading..." />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1115] px-4 pt-24 pb-12">
      <div className="max-w-2xl mx-auto text-center">
        
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent select-none">
            404
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FaExclamationTriangle className="text-6xl text-[#D4AF37]/20" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              Page Not Found
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-4 animate-fade-up-delay-1">
            Oops! Lost in <span className="text-[#D4AF37]">Luxury</span>
          </h1>
          
          <p className="text-[#A0A0A0] text-lg mb-8 max-w-lg mx-auto animate-fade-up-delay-1">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-2">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F1115] font-bold hover:scale-[1.02] transition-all duration-300 group"
            >
              <FaHome size={16} />
              Back to Home
              <FaArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/sale"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <FaSearch size={16} />
              Browse Properties
              <FaArrowLeft size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 animate-fade-up-delay-2">
            <p className="text-[#A0A0A0] text-sm mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="text-[#A0A0A0] hover:text-[#D4AF37] transition">Home</Link>
              <Link to="/rent" className="text-[#A0A0A0] hover:text-[#D4AF37] transition">Rent</Link>
              <Link to="/sale" className="text-[#A0A0A0] hover:text-[#D4AF37] transition">Sale</Link>
              <Link to="/agents" className="text-[#A0A0A0] hover:text-[#D4AF37] transition">Agents</Link>
              <Link to="/contact" className="text-[#A0A0A0] hover:text-[#D4AF37] transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;