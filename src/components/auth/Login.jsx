import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { loginUser } from "../../api/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import speak from "../../utils/speak";

const Login = ({
  isOpen,
  onClose,
  onSwitchToSignUp,
  onSwitchToForgotPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // =========================
  // NORMAL LOGIN
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }

    setIsLoading(true);

    try {
      const data = await loginUser(username, password);

      // WordPress JWT
      localStorage.setItem("token", data.token);

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      toast.success("Login Successful");
      speak("Login Successful");

      setTimeout(() => {
        onClose();
      }, 1000);

    } catch (error) {
      console.error("Login Error:", error);

      toast.error("Invalid Username or Password");
      speak("Invalid Username or Password");

    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">

      <div className="bg-[#171B22] rounded-2xl max-w-md w-full p-6 border border-white/10 shadow-2xl relative animate-fade-up">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#D4AF37] transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">

          <div className="text-2xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent mb-1">
            LUXURY ESTATES
          </div>

          <h3 className="text-xl font-bold text-[#F8F8F8]">
            Welcome Back
          </h3>

          <p className="text-[#A0A0A0] text-sm mt-1">
            Sign in to your account
          </p>

        </div>

        {/* NORMAL LOGIN */}
        <form
          className="space-y-4"
          onSubmit={handleLogin}
        >

          {/* Username */}
          <div className="relative">

            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-4 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              disabled={isLoading}
            />

          </div>

          {/* Password */}
          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-[#0F1115] rounded-xl pl-12 pr-12 py-3 text-[#F8F8F8] placeholder:text-[#A0A0A0]/50 border border-white/5 focus:border-[#D4AF37] outline-none transition"
              disabled={isLoading}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#D4AF37] transition"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-[#A0A0A0] text-sm cursor-pointer">

              <input
                type="checkbox"
                className="w-4 h-4 rounded border-white/10 bg-[#0F1115] text-[#D4AF37] cursor-pointer"
                disabled={isLoading}
              />

              Remember me

            </label>

            <button
              type="button"
              onClick={
                onSwitchToForgotPassword
              }
              className="text-[#D4AF37] text-sm hover:underline transition"
              disabled={isLoading}
            >
              Forgot Password?
            </button>

          </div>

          {/* Sign In */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >

            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}

          </button>

        </form>

        {/* OR */}
        <div className="flex items-center gap-4 my-4">

          <div className="flex-1 h-px bg-white/10" />

          <span className="text-[#A0A0A0] text-xs">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

        {/* SOCIAL */}
        <div className="flex gap-3">

          {/* GOOGLE */}
          <button
            type="button"
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-3 rounded-xl text-[#F8F8F8] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition disabled:opacity-50"
          >
            <FaGoogle />
            Google
          </button>

          {/* FACEBOOK */}
          <button
            type="button"
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-3 rounded-xl text-[#F8F8F8] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
          >
            <FaFacebook />
            Facebook
          </button>

        </div>

        {/* SIGN UP */}
        <p className="text-center text-[#A0A0A0] text-sm mt-4">

          Don't have an account?{" "}

          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="text-[#D4AF37] font-semibold hover:underline transition"
            disabled={isLoading}
          >
            Sign Up
          </button>

        </p>

      </div>
    </div>
  );
};

export default Login;