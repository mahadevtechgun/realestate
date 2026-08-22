import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Cta from '../components/ui/Cta';
import PageLoader from '../components/ui/PageLoader';

const Agents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Agents..." />;
  }

  const agents = [
    {
      id: 1,
      name: 'Jessica Williams',
      role: 'Luxury Property Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 4.9,
      reviews: 128,
      phone: '+1 (888) 555-1234',
      email: 'jessica@luxuryestates.com',
      experience: '12+ Years',
      Properties: 156,
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'International Estates Expert',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      rating: 4.8,
      reviews: 95,
      phone: '+1 (888) 555-5678',
      email: 'david@luxuryestates.com',
      experience: '15+ Years',
      Properties: 210,
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      role: 'Waterfront Properties',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 4.7,
      reviews: 82,
      phone: '+1 (888) 555-9012',
      email: 'sophia@luxuryestates.com',
      experience: '8+ Years',
      Properties: 98,
    },
    {
      id: 4,
      name: 'Michael Thompson',
      role: 'Commercial Real Estate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 4.9,
      reviews: 156,
      phone: '+1 (888) 555-3456',
      email: 'michael@luxuryestates.com',
      experience: '20+ Years',
      Properties: 320,
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Luxury Villa Specialist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
      rating: 4.6,
      reviews: 67,
      phone: '+1 (888) 555-7890',
      email: 'emily@luxuryestates.com',
      experience: '6+ Years',
      Properties: 74,
    },
    {
      id: 6,
      name: 'James Anderson',
      role: 'New Developments',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 4.8,
      reviews: 110,
      phone: '+1 (888) 555-2345',
      email: 'james@luxuryestates.com',
      experience: '10+ Years',
      Properties: 185,
    },
  ];

  return (
    <>
      <div className="pt-24 pb-24 px-[5%] bg-[#0F1115] min-h-screen">
        <div className="max-w-[1300px] mx-auto">
          
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
            {agents.map((agent, index) => (
              <div 
                key={agent.id}
                className={`group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 animate-fade-up-delay-${(index % 3) + 1}`}
              >
                <div className="relative h-[280px] overflow-hidden bg-[#0F1115]">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/171B22/D4AF37?text=LE';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-[#0F1115]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                    <div className="flex text-[#D4AF37] text-xs">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                    <span className="text-[#F8F8F8] text-xs font-semibold">{agent.rating}</span>
                    <span className="text-[#A0A0A0] text-xs">({agent.reviews})</span>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#0F1115]/80 backdrop-blur-sm flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-white/10 transition">
                      <FaInstagram size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#0F1115]/80 backdrop-blur-sm flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-white/10 transition">
                      <FaLinkedinIn size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#0F1115]/80 backdrop-blur-sm flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-white/10 transition">
                      <FaTwitter size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-1">{agent.name}</h3>
                  <p className="text-[#D4AF37] text-sm font-medium mb-4">{agent.role}</p>
                  
                  <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                    <div>
                      <p className="text-[#F8F8F8] font-bold text-sm">{agent.experience}</p>
                      <p className="text-[#A0A0A0] text-[10px] uppercase tracking-wider">Experience</p>
                    </div>
                    <div className="w-px bg-white/10"></div>
                    <div>
                      <p className="text-[#F8F8F8] font-bold text-sm">{agent.Properties}</p>
                      <p className="text-[#A0A0A0] text-[10px] uppercase tracking-wider">Properties</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href={`tel:${agent.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 py-2.5 rounded-xl text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition"
                    >
                      <FaPhone size={14} /> Call
                    </a>
                    <a 
                      href={`mailto:${agent.email}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] border border-white/10 py-2.5 rounded-xl text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
                    >
                      <FaEnvelope size={14} /> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
};

export default Agents;  