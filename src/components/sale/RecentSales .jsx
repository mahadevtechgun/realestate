import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const RecentSales = () => {
  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#D4AF37] uppercase tracking-[3px] text-sm font-semibold mb-2 animate-fade-up">
            RECENT SALES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#A0A0A0] bg-clip-text text-transparent animate-fade-up-delay-1">
            Recently Sold Properties
          </h2>
          <p className="text-[#A0A0A0] mt-3 animate-fade-up-delay-1">
            Check out our recently sold luxury Properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-[#171B22] rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
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

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1 rounded-[20px] text-xs font-semibold text-[#0F1115] z-10">
                SOLD
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-3 py-1.5 rounded-[20px] text-lg font-bold text-[#D4AF37] z-10">
                $3.2M <span className="text-xs">/ sold</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#F8F8F8] mb-2">Modern Hillside Villa</h3>
              <div className="text-[#A0A0A0] text-sm mb-4">
                <FaMapMarkerAlt className="text-[#D4AF37] inline mr-1" /> Beverly Hills, CA
              </div>
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 6 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 5 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 5,200 sqft
                </span>
              </div>
              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-[40px] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-[#171B22] rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
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

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1 rounded-[20px] text-xs font-semibold text-[#0F1115] z-10">
                SOLD
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-3 py-1.5 rounded-[20px] text-lg font-bold text-[#D4AF37] z-10">
                $8.9M <span className="text-xs">/ sold</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#F8F8F8] mb-2">Oceanfront Mansion</h3>
              <div className="text-[#A0A0A0] text-sm mb-4">
                <FaMapMarkerAlt className="text-[#D4AF37] inline mr-1" /> Malibu, CA
              </div>
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 7 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 8 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 8,500 sqft
                </span>
              </div>
              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-[40px] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-[#171B22] rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
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

              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1 rounded-[20px] text-xs font-semibold text-[#0F1115] z-10">
                SOLD
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-3 py-1.5 rounded-[20px] text-lg font-bold text-[#D4AF37] z-10">
                $4.5M <span className="text-xs">/ sold</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#F8F8F8] mb-2">Mediterranean Villa</h3>
              <div className="text-[#A0A0A0] text-sm mb-4">
                <FaMapMarkerAlt className="text-[#D4AF37] inline mr-1" /> Miami Beach, FL
              </div>
              <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                <span className="text-sm text-[#A0A0A0]">
                  <FaBed className="text-[#D4AF37] inline mr-1" /> 5 Beds
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaBath className="text-[#D4AF37] inline mr-1" /> 5 Baths
                </span>
                <span className="text-sm text-[#A0A0A0]">
                  <FaRulerCombined className="text-[#D4AF37] inline mr-1" /> 4,500 sqft
                </span>
              </div>
              <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-[40px] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                View Property →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;