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


const SaleHero = ({ onSearch }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const priceRanges = [
    { label: "Any Price", value: "" },
    { label: "$0 - $500k", value: "0-500000" },
    { label: "$500k - $1M", value: "500000-1000000" },
    { label: "$1M - $2M", value: "1000000-2000000" },
    { label: "$2M - $5M", value: "2000000-5000000" },
    { label: "$5M+", value: "5000000-999999999" },
  ];


  // Search Button — 
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

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800"
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
          alt="Luxury property"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-[5%] py-12 w-full">

        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2.5 rounded-full mb-6">
            <FaGem className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              Exclusive Property Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-6">
            Find Exceptional <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D97E] bg-clip-text text-transparent">
              Properties to Sell
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#A0A0A0] text-lg text-center mb-8">
            Discover premium Properties listed for sale by owners and connect with serious buyers.
          </p>

          {/* Search Box */}
          <div className="w-full bg-white/5 backdrop-blur-[20px] p-4 rounded-2xl border border-white/10">

            <div className="flex flex-col lg:flex-row gap-3">

              {/* Location */}
              <div className="flex-1 relative">
                <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 py-4 text-white"
                >
                  <option value="">Property Location</option>
                  {locations.map((item) => (
                    <option key={item.id} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="flex-1 relative">
                <FaCoins className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 py-4 text-white"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="flex-1 relative">
                <FaHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0F1115]/80 rounded-xl pl-11 py-4 text-white"
                >
                  <option value="">Property Categories</option>
                  {categories.map((item) => (
                    <option key={item.id} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Button with Loader */}
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <FaSearch />
                    Search Property
                    <FaArrowRight />
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

export default SaleHero;