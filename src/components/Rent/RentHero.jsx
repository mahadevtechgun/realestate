import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  FaGem, 
  FaCircleCheck, 
  FaUserShield, 
  FaBolt, 
  FaLocationDot, 
  FaCoins, 
  FaHouse 
} from 'react-icons/fa6';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { 
  getPropertyCategories, 
  getPropertyLocations 
} from '../../api/getApi';

const RentHero = ({ onSearch }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const priceRanges = [
    { label: "Any Price", value: "" },
    { label: "$0 - $1k", value: "0-1000" },
    { label: "$1k - $3k", value: "1000-3000" },
    { label: "$3k - $5k", value: "3000-5000" },
    { label: "$5k - $10k", value: "5000-10000" },
    { label: "$10k+", value: "10000-999999999" },
  ];

  // Search Button 
  const handleSearch = () => {
    setIsLoading(true);

    const params = new URLSearchParams();

    if (selectedLocation) {
      params.append("location", selectedLocation);
    }

    if (selectedCategory) {
      params.append("category", selectedCategory);
    }

    if (selectedPrice) {
      params.append("price", selectedPrice);
    }

    // Simulate async operation
    setTimeout(() => {
      setSearchParams(params);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {

    const fetchData = async () => {

      try {

        const categoriesData = await getPropertyCategories();
        setCategories(categoriesData);

        const locationsData = await getPropertyLocations();
        setLocations(locationsData);

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800" 
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
          alt="Luxury property for rent"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-[5%] py-12 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2.5 rounded-full mb-6 animate-fade-up mt-8">
            <FaGem className="text-[#D4AF37] text-sm" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              Premium Rental Collection
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-delay-1 text-center">
            Find Your Dream <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D97E] bg-clip-text text-transparent">
              Property to Rent
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-[#A0A0A0] text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-1 text-center">
            Discover premium rental Properties in prime locations. Find your perfect home with our curated collection of luxury rentals.
          </p>
         
          
          {/* Search Form - Full Width */}
          <div className="w-full bg-white/5 backdrop-blur-[20px] p-4 rounded-2xl border border-white/10 shadow-2xl animate-fade-up-delay-2">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Location */}
              <div className="flex-1 relative group">
                <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition"
                >
                  <option value="" className="bg-[#0F1115]">Property Location</option>
                  {locations.map((item) => (
                    <option key={item.id} value={item.slug} className="bg-[#0F1115]">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Price Range */}
              <div className="flex-1 relative group">
                <FaCoins className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-[#0F1115]">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Property Type / Category */}
              <div className="flex-1 relative group">
                <FaHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:text-[#F5D97E] transition" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 pr-4 py-4 text-white appearance-none cursor-pointer border border-white/5 focus:border-[#D4AF37] outline-none transition"
                >
                  <option value="" className="bg-[#0F1115]">Property Categories</option>
                  {categories.map((item) => (
                    <option key={item.id} value={item.slug} className="bg-[#0F1115]">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Search Button with Loader */}
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-10 py-4 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap min-w-[180px] group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0F1115]/30 border-t-[#0F1115] rounded-full animate-spin"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <FaSearch className="group-hover:scale-110 transition" />
                    Search Rentals
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentHero;