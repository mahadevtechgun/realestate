import React, { useState } from "react";
import {
  FaEnvelope,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import { forgotPassword } from "../../api/authApi"; 
import { toast } from "react-toastify";
import speak from "../../utils/speak";

const ForgotPassword = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      speak("Please enter your email.")

      return;
    }

    setIsLoading(true);

    try {
      const res = await forgotPassword(email);

      console.log("Response:", res);

      setIsSent(true);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to send reset link."
      );
      speak(
        error.response?.data?.message ||
          "Failed to send reset link."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#171B22] rounded-2xl max-w-md w-full p-6 border border-white/10 shadow-2xl relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#D4AF37]"
        >
          <FaTimes size={20} />
        </button>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Forgot Password
          </h2>

          <p className="text-gray-400 mt-2">
            {isSent
              ? "Check your email for the reset link."
              : "Enter your registered email address."}
          </p>
        </div>

        {isSent ? (
          <>
            <div className="text-center">
              <div className="text-green-500 text-lg mb-4">
                ✅ Password reset link sent successfully.
              </div>

              <button
                onClick={onSwitchToLogin}
                className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold"
              >
                Back to Login
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <FaEnvelope className="absolute left-4 top-4 text-[#D4AF37]" />

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0F1115] text-white border border-gray-700 focus:border-[#D4AF37] outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold"
            >
              {isLoading
                ? "Sending..."
                : "Send Reset Link"}
            </button>
          </form>
        )}

        {!isSent && (
          <button
            onClick={onSwitchToLogin}
            className="mt-5 flex items-center justify-center gap-2 text-gray-400 hover:text-[#D4AF37] w-full"
          >
            <FaArrowLeft />
            Back to Login
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;