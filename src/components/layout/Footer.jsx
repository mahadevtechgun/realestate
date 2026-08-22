import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F1115] border-t border-white/10 py-16 px-[5%]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1 - Brand */}
          <div>
            <Link to="/">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent cursor-pointer">
                LUXURY ESTATES
              </h3>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              Redefining luxury real estate with exclusive Properties worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#171B22] flex items-center justify-center text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition-all duration-300 hover:scale-110">
                <FaFacebookF size={15} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#171B22] flex items-center justify-center text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition-all duration-300 hover:scale-110">
                <FaInstagram size={15} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#171B22] flex items-center justify-center text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition-all duration-300 hover:scale-110">
                <FaTwitter size={15} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#171B22] flex items-center justify-center text-[#A0A0A0] hover:bg-[#D4AF37] hover:text-[#0F1115] transition-all duration-300 hover:scale-110">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li>
                <Link to="/sale" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Sale
                </Link>
              </li>
              <li>
                <Link to="/rent" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Rent
                </Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Agents
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-[#D4AF37] text-lg font-bold mb-5">Resources</h4>
            <ul className="space-y-3 text-[#A0A0A0]">
              <li>
                <Link to="/buying-guide" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Buying Guide
                </Link>
              </li>
              <li>
                <Link to="/selling-guide" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Selling Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition flex items-center gap-2 group">
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[#D4AF37] text-lg font-bold mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-[#A0A0A0]">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition">
                  <FaPhone className="text-[#D4AF37] group-hover:text-[#0F1115] transition" size={14} />
                </div>
                <div>
                  <p className="text-xs text-[#A0A0A0]/60">Phone</p>
                  <a href="tel:+18885551234" className="text-[#F8F8F8] font-medium hover:text-[#D4AF37] transition">
                    +1 (888) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition">
                  <FaEnvelope className="text-[#D4AF37] group-hover:text-[#0F1115] transition" size={14} />
                </div>
                <div>
                  <p className="text-xs text-[#A0A0A0]/60">Email</p>
                  <a href="mailto:hello@luxuryestates.com" className="text-[#F8F8F8] font-medium hover:text-[#D4AF37] transition">
                    hello@luxuryestates.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition">
                  <FaMapMarkerAlt className="text-[#D4AF37] group-hover:text-[#0F1115] transition" size={14} />
                </div>
                <div>
                  <p className="text-xs text-[#A0A0A0]/60">Address</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F8] font-medium hover:text-[#D4AF37] transition">
                    Beverly Hills, CA 90210
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-10 border-t border-white/10">
          <p className="text-[#A0A0A0]/50 text-sm">
            © 2026 Luxury Estates. All rights reserved.
          </p>
          <p className="text-[#A0A0A0]/40 text-sm mt-2 md:mt-0">
            Designed & Developed by <span className="text-[#D4AF37] font-medium hover:text-[#F5D97E] transition">Ashish Rajput</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;