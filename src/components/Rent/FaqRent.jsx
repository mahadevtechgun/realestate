import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqRent = () => {
  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            Got questions about renting? We've got answers
          </p>
        </div>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                How long is the typical lease term?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Our standard lease terms are 12 months. However, we offer flexible terms ranging from 6-24 months depending on the property and landlord requirements.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                What documents do I need to rent a property?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              You'll need a valid ID, proof of income (pay stubs or tax returns), employment verification, and rental references. Some Properties may require additional documentation.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                Is the security deposit refundable?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Yes, the security deposit is fully refundable, provided there's no damage to the property beyond normal wear and tear. We conduct a thorough inspection before move-in and after move-out.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                Can I bring my pet?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Pet policies vary by property. Some of our Properties are pet-friendly with an additional pet deposit. We'll help you find the perfect home for you and your furry friend.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                What utilities are included in the rent?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Most Properties include water and garbage in the rent. Electricity, gas, and internet are typically paid separately. We'll provide you with a complete breakdown before signing.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                How does the application process work?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Submit your application online, pay the application fee, and we'll verify your documents. The process typically takes 24-48 hours. We'll keep you updated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqRent;