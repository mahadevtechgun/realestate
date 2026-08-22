import React, { useState } from 'react';
import Cta from "../components/ui/Cta"

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long is the typical lease term?",
      answer: "Our standard lease terms are 12 months. However, we offer flexible terms ranging from 6-24 months depending on the property and landlord requirements."
    },
    {
      question: "What documents do I need to rent a property?",
      answer: "You'll need a valid ID, proof of income (pay stubs or tax returns), employment verification, and rental references. Some properties may require additional documentation."
    },
    {
      question: "Is the security deposit refundable?",
      answer: "Yes, the security deposit is fully refundable, provided there's no damage to the property beyond normal wear and tear. We conduct a thorough inspection before move-in and after move-out."
    },
    {
      question: "Can I bring my pet?",
      answer: "Pet policies vary by property. Some of our properties are pet-friendly with an additional pet deposit. We'll help you find the perfect home for you and your furry friend."
    },
    {
      question: "What utilities are included in the rent?",
      answer: "Most properties include water and garbage in the rent. Electricity, gas, and internet are typically paid separately. We'll provide you with a complete breakdown before signing."
    },
    {
      question: "How does the application process work?",
      answer: "Submit your application online, pay the application fee, and we'll verify your documents. The process typically takes 24-48 hours. We'll keep you updated every step of the way."
    },
    {
      question: "Can I sublease the property?",
      answer: "Subleasing is subject to landlord approval and must be explicitly stated in your lease agreement. Please discuss this with your property manager before making any arrangements."
    },
    {
      question: "What happens if I need to break my lease early?",
      answer: "Early lease termination may incur fees as specified in your agreement. We recommend discussing this with your property manager to understand the terms and potential costs involved."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="py-20 px-[5%] bg-[#0F1115] min-h-screen">
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
            Find answers to the most common questions about our properties
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] ${
                openIndex === index ? 'border-[#D4AF37]/50' : ''
              }`}
            >
              {/* Question */}
              <div
                className="p-5 cursor-pointer hover:bg-[#D4AF37]/5 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`font-bold transition ${
                    openIndex === index ? 'text-[#F5D97E]' : 'text-[#D4AF37] group-hover:text-[#F5D97E]'
                  }`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#D4AF37] text-sm shrink-0 mt-1 transition duration-300" />
                  ) : (
                    <FaChevronDown className="text-[#D4AF37] text-sm shrink-0 mt-1 group-hover:rotate-180 transition duration-300" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
    <Cta/>

</>
  );
};

export default Faq;