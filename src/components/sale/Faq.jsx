import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
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
            Got questions about selling? We've got answers
          </p>
        </div>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                How long does it take to sell my property?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              On average, our Properties sell within 30-45 days. Luxury Properties may take 2-3 months depending on market conditions.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                What are your commission fees?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Our standard commission is 3% for Properties under $1M, and negotiable for luxury Properties over $1M.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                Do you help with property staging?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Yes! We provide professional staging consultation and can arrange virtual staging for empty Properties.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                How do you market my property?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              We list on 50+ portals, professional photography, social media campaigns, email marketing to our buyer database, and open houses.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] animate-fade-up-delay-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-[#D4AF37] group-hover:text-[#F5D97E] transition">
                Can I list my property for free?
              </h3>
              <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
            </div>
            <p className="text-[#A0A0A0] mt-2 leading-relaxed">
              Basic listing is free. Premium features include professional photography, featured placement, and social media promotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;