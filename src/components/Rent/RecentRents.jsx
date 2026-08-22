import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const RecentRents = () => {
  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              RECENT RENTALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Recently Rented <span className="text-[#D4AF37]">Properties</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            Check out our recently rented luxury Properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Property Card 1 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="relative h-[280px] overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#0F1115]/70 rounded-full flex items-center justify-center cursor-pointer z-20 hover:bg-[#D4AF37] hover:text-[#0F1115] transition-colors">
                <FaRegHeart className="text-[#D4AF37] text-lg" />
              </div>
              
              <div className="flex transition-transform duration-500 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 2" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 3" 
                />
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                ←
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                →
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
              </div>

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full text-xs font-bold text-[#0F1115] z-10 uppercase tracking-wider">
                RENTED
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37] border border-white/10">
                $5,700 <span className="text-xs font-normal text-[#A0A0A0]">/ month</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">Luxury Penthouse</h3>
              <div className="flex items-center gap-1 text-[#A0A0A0] text-sm mb-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-xs" />
                Manhattan, NY
              </div>
              
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 4 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 4 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 3,800 sqft
                </span>
              </div>

              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="relative h-[280px] overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#0F1115]/70 rounded-full flex items-center justify-center cursor-pointer z-20 hover:bg-[#D4AF37] hover:text-[#0F1115] transition-colors">
                <FaRegHeart className="text-[#D4AF37] text-lg" />
              </div>
              
              <div className="flex transition-transform duration-500 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 2" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 3" 
                />
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                ←
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                →
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
              </div>

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full text-xs font-bold text-[#0F1115] z-10 uppercase tracking-wider">
                RENTED
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37] border border-white/10">
                $3,200 <span className="text-xs font-normal text-[#A0A0A0]">/ month</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">Modern Glass Villa</h3>
              <div className="flex items-center gap-1 text-[#A0A0A0] text-sm mb-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-xs" />
                Silicon Valley, CA
              </div>
              
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 5 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 4 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 3,800 sqft
                </span>
              </div>

              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="relative h-[280px] overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#0F1115]/70 rounded-full flex items-center justify-center cursor-pointer z-20 hover:bg-[#D4AF37] hover:text-[#0F1115] transition-colors">
                <FaRegHeart className="text-[#D4AF37] text-lg" />
              </div>
              
              <div className="flex transition-transform duration-500 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 2" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" 
                  className="w-full h-full object-cover flex-shrink-0" 
                  alt="Property 3" 
                />
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                ←
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center cursor-pointer text-[#D4AF37] z-10 hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                →
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
                <span className="w-2 h-2 rounded-full bg-white/50 cursor-pointer hover:bg-[#D4AF37] transition"></span>
              </div>

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full text-xs font-bold text-[#0F1115] z-10 uppercase tracking-wider">
                RENTED
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37] border border-white/10">
                $1,800 <span className="text-xs font-normal text-[#A0A0A0]">/ month</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">Cozy Family Home</h3>
              <div className="flex items-center gap-1 text-[#A0A0A0] text-sm mb-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-xs" />
                Austin, TX
              </div>
              
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 3 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 2 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 1,900 sqft
                </span>
              </div>

              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRents;