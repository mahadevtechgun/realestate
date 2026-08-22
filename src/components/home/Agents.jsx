import { FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Agents = () => {
  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              MEET OUR EXPERTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Premium Real Estate <span className="text-[#D4AF37]">Agents</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            Our team of experienced professionals is dedicated to helping you find your dream property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Agent Card 1 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-8 text-center border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" 
                className="w-[120px] h-[120px] rounded-full object-cover mx-auto border-[3px] border-[#D4AF37] group-hover:border-[#F5D97E] transition" 
                alt="Jessica Williams" 
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#171B22]"></div>
            </div>
            <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">Jessica Williams</h3>
            <p className="text-[#D4AF37] text-sm font-medium mb-3">Luxury Property Specialist</p>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-4">
              <div className="flex text-[#D4AF37] text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <span className="text-[#F8F8F8] text-xs font-semibold">4.9</span>
              <span className="text-[#A0A0A0] text-xs">(128)</span>
            </div>

            <div className="flex justify-center gap-3">
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaPhone />
              </div>
            </div>
          </div>

          {/* Agent Card 2 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-8 text-center border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" 
                className="w-[120px] h-[120px] rounded-full object-cover mx-auto border-[3px] border-[#D4AF37] group-hover:border-[#F5D97E] transition" 
                alt="David Chen" 
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#171B22]"></div>
            </div>
            <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">David Chen</h3>
            <p className="text-[#D4AF37] text-sm font-medium mb-3">International Estates Expert</p>
            
            <div className="flex items-center justify-center gap-1 mb-4">
              <div className="flex text-[#D4AF37] text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <span className="text-[#F8F8F8] text-xs font-semibold">4.8</span>
              <span className="text-[#A0A0A0] text-xs">(95)</span>
            </div>

            <div className="flex justify-center gap-3">
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaPhone />
              </div>
            </div>
          </div>

          {/* Agent Card 3 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-8 text-center border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" 
                className="w-[120px] h-[120px] rounded-full object-cover mx-auto border-[3px] border-[#D4AF37] group-hover:border-[#F5D97E] transition" 
                alt="Sophia Rodriguez" 
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#171B22]"></div>
            </div>
            <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">Sophia Rodriguez</h3>
            <p className="text-[#D4AF37] text-sm font-medium mb-3">Waterfront Properties</p>
            
            <div className="flex items-center justify-center gap-1 mb-4">
              <div className="flex text-[#D4AF37] text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <span className="text-[#F8F8F8] text-xs font-semibold">4.7</span>
              <span className="text-[#A0A0A0] text-xs">(82)</span>
            </div>

            <div className="flex justify-center gap-3">
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 bg-[#0F1115]/50 rounded-full flex items-center justify-center cursor-pointer text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                <FaPhone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;