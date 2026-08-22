import React from "react";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiMapPin,
} from "react-icons/fi";

const Statistics = () => {
  return (
    <section className="py-20 px-[5%]">
      <div className="max-w-[1300px] mx-auto">
        <div className="bg-[#171B22] rounded-[40px] py-16 px-8 md:p-16 border border-white/10 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[#D4AF37] uppercase tracking-[3px] text-sm font-semibold mb-2 animate-fade-up">
              OUR ACHIEVEMENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#A0A0A0] bg-clip-text text-transparent animate-fade-up-delay-1">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
            
            {/* Item 1 */}
            <div className="group text-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 flex justify-center">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1115]">
                  <FiHome size={32} />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">
                500+
              </h2>

              <p className="mt-2 text-sm tracking-wide text-[#A0A0A0] uppercase">
                Luxury Properties
              </p>
            </div>

            {/* Item 2 */}
            <div className="group text-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 flex justify-center">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1115]">
                  <FiUsers size={32} />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">
                200+
              </h2>

              <p className="mt-2 text-sm tracking-wide text-[#A0A0A0] uppercase">
                Happy Clients
              </p>
            </div>

            {/* Item 3 */}
            <div className="group text-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 flex justify-center">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1115]">
                  <FiUserCheck size={32} />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">
                50+
              </h2>

              <p className="mt-2 text-sm tracking-wide text-[#A0A0A0] uppercase">
                Expert Agents
              </p>
            </div>

            {/* Item 4 */}
            <div className="group text-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 flex justify-center">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F1115]">
                  <FiMapPin size={32} />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">
                25+
              </h2>

              <p className="mt-2 text-sm tracking-wide text-[#A0A0A0] uppercase">
                Prime Locations
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;