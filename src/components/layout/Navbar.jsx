import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHeart,
  FiUser,
  FiArrowUpRight,
  FiLogOut,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import WishlistButton from "../ui/WishlistButton";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 3, name: "Rent", path: "/rent" },
  { id: 4, name: "Sale", path: "/sale" },
  { id: 5, name: "Agents", path: "/agents" },
  { id: 6, name: "Contact", path: "/contact" },
];

const Navbar = ({ setIsLoginOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const wishlist = useSelector(state => state.wishlist?.items || []);
  
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (setIsLoginOpen) {
      setIsLoginOpen(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsMobileMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0F1115] border-b border-white/10 py-2 px-6">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          <p className="text-xs text-[#A0A0A0]">
            Find your dream property with Luxury Estates
          </p>
          <div className="flex items-center gap-6 text-xs text-[#A0A0A0]">
            <a href="tel:+33123456789" className="hover:text-[#D4AF37] transition">
              +33 1 23 45 67 89
            </a>
            <a href="mailto:hello@luxuryestates.com" className="hover:text-[#D4AF37] transition">
              hello@luxuryestates.com
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1115]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-[#0F1115] font-bold text-sm">
                LE
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold tracking-wider text-white">LUXURY</p>
                <p className="text-[8px] tracking-[0.3em] text-[#A0A0A0]">ESTATES</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm transition ${
                        isActive ? "text-[#D4AF37]" : "text-[#A0A0A0] hover:text-[#D4AF37]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <WishlistButton />
              <LanguageSwitcher />
              {!isLoggedIn ? (
                <button
                  onClick={handleLoginClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
                >
                  <FiUser size={16} />
                  Sign In
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 text-sm text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <FiLogOut size={16} />
                  Logout
                </button>
              )}
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-sm font-bold text-[#0F1115] hover:scale-105 transition"
              >
                List Property
                <FiArrowUpRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
            >
              {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            fixed inset-0 bg-black/50 z-40 lg:hidden
            transition-opacity duration-300
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu - Slide from Right */}
        <div className={`
          fixed top-0 right-0 w-full sm:w-96 h-full 
          bg-[#0F1115] z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-white/10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
            >
              <FiX size={22} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition group"
                  >
                    <span className="text-xs text-[#D4AF37] font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#A0A0A0] group-hover:text-white transition">
                      {link.name}
                    </span>
                    <FiArrowUpRight className="ml-auto text-[#A0A0A0] group-hover:text-[#D4AF37] transition" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/10 my-4" />
            <LanguageSwitcher mobile onLanguageSelect={() => setIsMobileMenuOpen(false)} />
            <div className="h-px bg-white/10 my-4" />

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-sm text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
              >
                <FiHeart size={16} />
                Wishlist
                {wishlist.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0F1115] text-[10px] flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginOpen && setIsLoginOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-sm text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
                >
                  <FiUser size={16} />
                  Sign In
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500 text-sm text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <FiLogOut size={16} />
                  Logout
                </button>
              )}
            </div>

            <div className="mt-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-sm font-bold text-[#0F1115] hover:scale-[1.02] transition"
              >
                List Property
                <FiArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;