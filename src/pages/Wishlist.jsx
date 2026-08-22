import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaTrash, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { removeWishlist, clearWishlist } from "../redux/wishlistSlice";
import { removeWishlistApi, clearWishlistApi } from "../api/wishlistApi";
import PageLoader from "../components/ui/PageLoader";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleRemove = async (propertyId) => {
    try {
      console.log("Removing property ID:", propertyId);

      const response = await removeWishlistApi(propertyId);

      console.log("Remove API response:", response);

      dispatch(removeWishlist(propertyId));
      toast.success("Removed from wishlist!");

    } catch (error) {
      console.error("REMOVE ERROR:", error);
      console.error("STATUS:", error.response?.status);
      console.error("DATA:", error.response?.data);

      toast.error(
        error.response?.data?.message ||
        error.response?.data?.code ||
        "Failed to remove"
      );
    }
  };

  const handleClearAll = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      await clearWishlistApi();
      dispatch(clearWishlist());
      toast.success("Wishlist cleared successfully!");
    } catch (error) {
      toast.error("Failed to clear wishlist");
    }
  };

  // Helper function to get property type badge styles
  const getPropertyTypeBadge = (type) => {
    const types = {
      'For Sale': {
        bg: 'bg-[#D4AF37]',
        text: 'text-[#0F1115]',
        label: 'For Sale'
      },
      'For Rent': {
        bg: 'bg-blue-500',
        text: 'text-white',
        label: 'For Rent'
      },
      'Sold': {
        bg: 'bg-red-500',
        text: 'text-white',
        label: 'Sold'
      },
      'Featured': {
        bg: 'bg-purple-500',
        text: 'text-white',
        label: 'Featured'
      },
      'New': {
        bg: 'bg-green-500',
        text: 'text-white',
        label: 'New'
      },
      'Under Contract': {
        bg: 'bg-orange-500',
        text: 'text-white',
        label: 'Under Contract'
      }
    };

    // Default fallback
    return types[type] || {
      bg: 'bg-gray-500',
      text: 'text-white',
      label: type || 'Property'
    };
  };

  if (loading) {
    return <PageLoader text="Loading Your Wishlist..." />;
  }

  return (
    <div className="pt-24 pb-24 px-[5%] bg-[#0F1115] min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
                Your Favorites
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
              Your <span className="text-[#D4AF37]">Wishlist</span>
            </h2>
            <p className="text-[#A0A0A0] mt-2 animate-fade-up-delay-1">
              {wishlistItems.length} Properties saved to your wishlist
            </p>
          </div>
          
          <button 
            onClick={handleClearAll}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 group"
          >
            <FaTrash size={14} className="group-hover:scale-110 transition" /> Clear All
          </button>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item, index) => {
              const data = item?.acf || item || {};
              
              // Get property type with fallbacks
              const propertyType = data.property_type || item.property_type || 'Property';
              const badge = getPropertyTypeBadge(propertyType);

              return (
                <div
                  key={item.id}
                  className={`group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)]`}
                >
                  <div className="relative h-[240px] overflow-hidden bg-[#0F1115]">
                    <img
                      src={data.featured_image || item.featured_image || 'https://via.placeholder.com/400x300/1a1a2e/D4AF37?text=No+Image'}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent opacity-60"></div>

                    {/* Property Type Badge - Dynamic */}
                    <span
                      className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}
                    >
                      {badge.label}
                    </span>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0F1115]/80 backdrop-blur-sm flex items-center justify-center text-[#A0A0A0] hover:text-red-500 hover:bg-red-500/20 border border-white/10 transition-all duration-300 hover:scale-110"
                    >
                      <FaTrash size={14} />
                    </button>

                    <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37] border border-white/10">
                      ${data.price || item.price || "0"}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1 text-[#A0A0A0] text-sm mb-3">
                      <FaMapMarkerAlt className="text-[#D4AF37] text-xs" />
                      {data.address || "No address available"}
                    </div>

                    <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                      <span className="text-sm text-[#A0A0A0]">
                        <FaBed className="text-[#D4AF37] inline mr-1" />
                        {data.bedrooms || item.bedrooms || 0} Beds
                      </span>

                      <span className="text-sm text-[#A0A0A0]">
                        <FaBath className="text-[#D4AF37] inline mr-1" />
                        {data.bathrooms || item.bathrooms || 0} Baths
                      </span>

                      <span className="text-sm text-[#A0A0A0]">
                        <FaRulerCombined className="text-[#D4AF37] inline mr-1" />
                        {data.area || item.area || 0} Sq Ft
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={`/property/${item.id}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-2.5 rounded-xl text-[#0F1115] font-semibold hover:scale-[1.02] transition-all duration-300 group"
                      >
                        View Property
                        <FaArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition"
                        />
                      </Link>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="flex items-center justify-center bg-[#0F1115] border border-white/10 px-4 py-2.5 rounded-xl text-[#D4AF37] hover:border-red-500 hover:text-red-500 transition-all"
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-28 h-28 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <FaHeart className="text-5xl text-[#D4AF37]/40" />
            </div>
            <h3 className="text-2xl font-bold text-[#F8F8F8] mb-2">Your Wishlist is Empty</h3>
            <p className="text-[#A0A0A0] mb-8 max-w-md mx-auto">
              Start saving your favorite Properties by clicking the heart icon on any property listing.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F1115] font-bold hover:scale-[1.02] transition-all duration-300 group"
            >
              <FaShoppingBag size={16} /> Browse Properties
              <FaArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;