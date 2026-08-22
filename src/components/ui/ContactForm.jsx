import React, { useState } from 'react';
import { 
  FaTimes, FaUser, FaEnvelope, FaPhone, 
  FaCalendar, FaComment, FaArrowRight 
} from 'react-icons/fa';
import { submitTourSchedule } from '../../api/Post';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ isOpen, onClose, propertyTitle, propertyType, propertyId }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.phone.trim() || !formData.date) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Validate phone number (exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      setIsLoading(false);
      return;
    }

    // Validate date (should be future date)
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      toast.error("Please select a future date");
      setIsLoading(false);
      return;
    }

    try {
      // ✅ Property data with tour schedule
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        message: formData.message || "",
       
      };

      const response = await submitTourSchedule(payload);
      console.log("Tour scheduled successfully:", response);
      
      toast.success(response.message || "Tour scheduled successfully! We'll contact you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: ""
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      if (!error.response) {
        toast.error("Cannot connect to server. Please check your connection.");
      } else {
        toast.error(error.response?.data?.message || "Failed to schedule tour. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#171B22] rounded-2xl max-w-lg w-full p-6 border border-white/10 shadow-2xl relative animate-fade-up max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#D4AF37] transition z-10"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#F8F8F8]">
            Schedule a Tour
          </h3>
          
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
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
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Date */}
          <div className="relative">
            <FaCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaComment className="absolute left-4 top-4 text-[#D4AF37]" />
            <textarea
              name="message"
              placeholder="Additional Message (Optional)"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition resize-none"
              disabled={isLoading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] transition flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin"></div>
                Scheduling...
              </>
            ) : (
              <>
                Schedule Tour
                <FaArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;