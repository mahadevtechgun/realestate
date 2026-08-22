import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaCookie, FaDatabase, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="py-20 px-[5%] bg-[#0F1115] min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              Privacy Policy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Your <span className="text-[#D4AF37]">Privacy</span> Matters
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            We are committed to protecting your personal information and respecting your privacy
          </p>
        </div>

        {/* Last Updated */}
        <div className="text-center mb-12">
          <p className="text-[#A0A0A0]/60 text-sm">
            Last Updated: January 1, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Section 1 - Introduction */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaShieldAlt className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Introduction</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed">
              At Luxury Estates, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully to understand our views and practices regarding your personal data.
            </p>
          </div>

          {/* Section 2 - Information We Collect */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaDatabase className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Information We Collect</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Personal Information:</strong> Name, email address, phone number, and postal address</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Property Preferences:</strong> Property types, locations, budget, and other preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Usage Data:</strong> How you interact with our website, pages visited, time spent, and clicks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Device Information:</strong> IP address, browser type, operating system, and device type</span>
              </li>
            </ul>
          </div>

          {/* Section 3 - How We Use Your Information */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaUserShield className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">How We Use Your Information</h3>
            </div>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>To provide and maintain our real estate services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>To match you with suitable properties and agents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>To communicate with you about your inquiries and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>To improve our website and services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>To send you marketing communications (you can opt out anytime)</span>
              </li>
            </ul>
          </div>

          {/* Section 4 - Cookies */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaCookie className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Cookies</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed mb-4">
              We use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Remember your preferences and settings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Analyze how you use our website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Provide personalized content and recommendations</span>
              </li>
            </ul>
            <p className="text-[#A0A0A0] leading-relaxed mt-4">
              You can control cookie preferences through your browser settings.
            </p>
          </div>

          {/* Section 5 - Data Security */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaLock className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Data Security</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 6 - Third-Party Links */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaGlobe className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Third-Party Links</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies before providing any personal information.
            </p>
          </div>

          {/* Section 7 - Your Rights */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaUserShield className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Your Rights</h3>
            </div>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Access:</strong> Request a copy of your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Correction:</strong> Update or correct your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Deletion:</strong> Request deletion of your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#F8F8F8]">Opt-out:</strong> Unsubscribe from marketing communications</span>
              </li>
            </ul>
          </div>

          {/* Section 8 - Contact Us */}
          <div className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <FaShieldAlt className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37]">Contact Us</h3>
            </div>
            <p className="text-[#A0A0A0] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-3 text-[#A0A0A0]">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37] text-sm" />
                <a href="mailto:privacy@luxuryestates.com" className="hover:text-[#D4AF37] transition">
                  privacy@luxuryestates.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#D4AF37] text-sm" />
                <a href="tel:+18885551234" className="hover:text-[#D4AF37] transition">
                  +1 (888) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-sm" />
                <span>Beverly Hills, CA 90210, USA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;