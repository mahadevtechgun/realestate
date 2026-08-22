import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes, FaGoogle, FaFacebook } from 'react-icons/fa';
import { registerUser } from "../../api/authApi";
import { ToastContainer, toast } from "react-toastify";
import speak from '../../utils/speak';


const SignUp = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await registerUser(name, email, password);
      toast.success("Registration Successful");
      speak("Registration Successful");

      // Switch to login after successful registration
      setTimeout(() => {
        onSwitchToLogin();
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#171B22] rounded-2xl max-w-md w-full p-6 border border-white/10 shadow-2xl relative animate-fade-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#D4AF37] transition"
        >
          <FaTimes size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent mb-1">
            LUXURY ESTATES
          </div>
          <h3 className="text-xl font-bold text-[#F8F8F8]">Create Account</h3>
          <p className="text-[#A0A0A0] text-sm mt-1">Join Luxury Estates today</p>
        </div>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              disabled={isLoading}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              disabled={isLoading}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-12 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              disabled={isLoading}
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#D4AF37] transition"
              disabled={isLoading}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Create Account Button with Loader */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin"></div>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-[#A0A0A0] text-xs">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-3 rounded-xl text-[#F8F8F8] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition" disabled={isLoading}>
            <FaGoogle /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-3 rounded-xl text-[#F8F8F8] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition" disabled={isLoading}>
            <FaFacebook /> Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-[#A0A0A0] text-sm mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#D4AF37] font-semibold hover:underline transition"
            disabled={isLoading}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;