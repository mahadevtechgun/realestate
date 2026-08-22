import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiDollarSign, FiHome, FiSearch, FiArrowRight } from "react-icons/fi";
import { getProperties, getPropertyCategories, getPropertyLocations } from "../../api/getApi"

const Hero = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const priceRanges = [
    { label: "Any Price", value: "" },
    { label: "$0 - $500k", value: "0-500000" },
    { label: "$500k - $1M", value: "500000-1000000" },
    { label: "$1M - $3M", value: "1000000-3000000" },
    { label: "$3M - $5M", value: "3000000-5000000" },
    { label: "$5M+", value: "5000000-999999999" },
  ];

  useEffect(() => {
    fetchProperties();
    fetchFilters();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await getProperties();
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilters = async () => {
    try {
      const categoriesData = await getPropertyCategories();
      setCategories(categoriesData);

      const locationsData = await getPropertyLocations();
      setLocations(locationsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const params = new URLSearchParams();

    if (selectedLocation) {
      params.append("location", selectedLocation);
    }

    if (selectedType) {
      params.append("category", selectedType);
    }

    if (selectedPrice) {
      params.append("price", selectedPrice);
    }

    // Simulate navigation with a slight delay for better UX
    setTimeout(() => {
      if (selectedStatus === "For Rent") {
        navigate(`/rent?${params.toString()}`);
      } else {
        
        navigate(`/sale?${params.toString()}`);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2.5 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              PREMIUM COLLECTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-delay-1">
            Find Your <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D97E] bg-clip-text text-transparent">
              Dream Estate
            </span>
          </h1>

          <p className="text-[#A0A0A0] text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
            Discover the most exclusive luxury Properties in prime locations worldwide.
          </p>

          {/* Search Box - IMPROVED VERSION */}
          <div className="w-full bg-white/5 backdrop-blur-[20px] p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl animate-fade-up-delay-2">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Location — ab Dropdown hai */}
              <div className="relative group">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition z-10" size={20} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition-all duration-300 hover:bg-[#0F1115]/90 text-sm sm:text-base"
                  disabled={isLoading}
                >
                  <option value="" className="bg-[#0F1115]">Property Location</option>
                  {locations.map((item) => (
                    <option key={item.id} value={item.slug} className="bg-[#0F1115]">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Status */}
              <div className="relative group">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition z-10" size={20} />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition-all duration-300 hover:bg-[#0F1115]/90 text-sm sm:text-base"
                  disabled={isLoading}
                >
                  <option value="For Sale" className="bg-[#0F1115]">For Sale</option>
                  <option value="For Rent" className="bg-[#0F1115]">For Rent</option>
                </select>
              </div>

              {/* Property Type */}
              <div className="relative group">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition z-10" size={20} />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition-all duration-300 hover:bg-[#0F1115]/90 text-sm sm:text-base"
                  disabled={isLoading}
                >
                  <option value="" className="bg-[#0F1115]">Property Type</option>
                  {categories.map((item) => (
                    <option key={item.id} value={item.slug} className="bg-[#0F1115]">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="relative group">
                <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition z-10" size={20} />
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition-all duration-300 hover:bg-[#0F1115]/90 text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-[#0F1115]">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button - Full Width on Mobile */}
              <div className="lg:col-span-4 mt-2">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-4 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <FiSearch size={20} className="group-hover:scale-110 transition" />
                      Search Property
                      <FiArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

         
        </div>
      </div>

      
    </section>
  );
};

export default Hero;