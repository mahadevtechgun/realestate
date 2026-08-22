import React, { useState, useEffect } from 'react';
import { 
  FaUser, FaEnvelope, FaPhone, FaComment, 
  FaMapMarkerAlt, FaPhoneAlt, FaClock, FaArrowRight,
  FaInstagram, FaFacebook, FaTwitter, FaYoutube,
  FaBuilding, FaHome, FaShieldAlt, FaHeadset,
  FaWhatsapp, FaTelegram, FaLinkedin
} from 'react-icons/fa';
import { submitContactForm } from '../api/Post';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cta from '../components/ui/Cta';
import PageLoader from '../components/ui/PageLoader';
import speak from '../utils/speak';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Contact..." />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      speak("Please enter a valid 10-digit mobile number")
      setIsLoading(false);
      return;
    }

    try {
      const response = await submitContactForm(formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      speak("Message sent successfully! We'll get back to you soon.")
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      if (!error.response) {
        toast.error("Cannot connect to server. Please check your connection.");
        speak("Cannot connect to server. Please check your connection.")
      } else {
        toast.error(error.response?.data?.message || "Failed to send message. Please try again.");
        speak(error.response?.data?.message || "Failed to send message. Please try again.")

      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <section className="relative pt-32 pb-20 px-[5%] bg-[#0F1115]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Have questions about buying, selling, or renting? Our expert team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-[5%] bg-[#0F1115]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            <div className="lg:col-span-2 space-y-6">
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <FaPhoneAlt className="text-[#D4AF37] text-xl" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Phone</p>
                      <p className="text-[#F8F8F8] font-semibold text-lg">+1 (888) 555-1234</p>
                      <p className="text-[#A0A0A0] text-sm">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <FaEnvelope className="text-[#D4AF37] text-xl" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Email</p>
                      <p className="text-[#F8F8F8] font-semibold text-lg">hello@luxuryestates.com</p>
                      <p className="text-[#A0A0A0] text-sm">We reply within 24 hrs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Address</p>
                      <p className="text-[#F8F8F8] font-semibold text-lg">Beverly Hills, CA 90210</p>
                      <p className="text-[#A0A0A0] text-sm">United States</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <FaClock className="text-[#D4AF37] text-xl" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Working Hours</p>
                      <p className="text-[#F8F8F8] font-semibold text-lg">Mon - Fri: 9AM - 6PM</p>
                      <p className="text-[#A0A0A0] text-sm">Saturday: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#171B22] rounded-2xl p-6 text-center border border-white/10 hover:border-[#D4AF37]/30 transition">
                  <div className="text-2xl font-bold text-[#D4AF37]">500+</div>
                  <p className="text-[#A0A0A0] text-sm">Properties Sold</p>
                </div>
                <div className="bg-[#171B22] rounded-2xl p-6 text-center border border-white/10 hover:border-[#D4AF37]/30 transition">
                  <div className="text-2xl font-bold text-[#D4AF37]">200+</div>
                  <p className="text-[#A0A0A0] text-sm">Happy Clients</p>
                </div>
              </div>

              <div className="bg-[#171B22] rounded-2xl p-6 border border-white/10">
                <p className="text-[#A0A0A0] text-sm mb-4">Connect With Us</p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaYoutube size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F1115] flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/10 transition">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#F8F8F8] mb-2">
                    Send Us a <span className="text-[#D4AF37]">Message</span>
                  </h3>
                  <p className="text-[#A0A0A0] text-sm mb-8">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-4 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="relative group">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-4 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormData({
                            ...formData,
                            phone: value,
                          });
                        }}
                        maxLength={10}
                        className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-4 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="relative group">
                      <FaComment className="absolute left-4 top-4 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                      <textarea
                        name="message"
                        placeholder="Your Message *"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-4 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition resize-none"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-4 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] transition flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message 
                          <FaArrowRight size={16} className="group-hover:translate-x-1 transition" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-[5%] bg-[#0F1115]">
        <div className="max-w-[1300px] mx-auto">
          <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-3xl overflow-hidden border border-white/10">
            <div className="relative h-[400px] bg-[#0F1115]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.227344948599!2d-118.400684!3d34.100337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc041d6115c5%3A0x6bc279f9fa4f73!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxury Estates Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default Contact;