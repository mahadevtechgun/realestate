import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaSearch } from 'react-icons/fa';
import { WishlistIcon } from '../ui/Wishlisticon';
import { useEffect, useState } from 'react';
import { getProperties } from '../../api/getApi';
import { Gallery } from './Gallery';
import { Link, useSearchParams } from 'react-router-dom';

const RentProperties = ({ setIsLoginOpen, showViewAll = false }) => {
  const [Properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = searchParams.get("location");   
  const category = searchParams.get("category");   
  const price = searchParams.get("price"); 

  useEffect(() => {
    fetchProperties();
  }, [searchParams]);

  const fetchProperties = async () => {
    try {
      setIsLoading(true);
      const data = await getProperties();
      console.log("Properties API:", data);
      setProperties(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProperties = Properties?.filter((item) => {
    if (!item.property_type?.includes("For Rent")) {
      return false;
    }

    // Location Filter
    if (location) {
      const locationSlugs = item.property_location_slug || [];
      if (!locationSlugs.includes(location)) {
        return false;
      }
    }

    // Category Filter 
    if (category) {
      const categorySlugs = item.property_category_slug || [];
      if (!categorySlugs.includes(category)) {
        return false;
      }
    }

    // Price Filter
    if (price) {
      const [min, max] = price.split("-").map(Number);
      const itemPrice = Number(String(item.price || "").replace(/[^0-9.]/g, ""));

      if (isNaN(itemPrice) || itemPrice < min || itemPrice > max) {
        return false;
      }
    }

    return true;
  });

  // Clear Filters Function
  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              RENTAL COLLECTION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Properties For <span className="text-[#D4AF37]">Rent</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            Discover our curated collection of luxury rental Properties in prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredProperties?.map((items, index) => (
            <div key={index} className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 animate-fade-up-delay-1">
              <div className="relative h-[280px] overflow-hidden">
                <WishlistIcon property={items} setIsLoginOpen={setIsLoginOpen}/>
                
                {/* Gallery */}
                <div>
                  <Gallery items={items} />
                </div>

                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full text-xs font-bold text-[#0F1115] z-10 uppercase tracking-wider">
                  {items?.property_type}
                </div>

                {/* Property category */}
                <span className="absolute bottom-4 left-4 bg-[#D4AF37] text-[#0F1115] px-4 py-1 rounded-full text-xs font-bold uppercase z-20">
                  {items?.property_category}
                </span>

                <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 backdrop-blur-[10px] px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37] border border-white/10">
                  ${items?.price} <span className="text-xs font-normal text-[#A0A0A0]">/ total</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-1 group-hover:text-[#D4AF37] transition">{items.title}</h3>
                <div className="flex items-center gap-1 text-[#A0A0A0] text-sm mb-3">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-xs" />
                  {items?.address}
                </div>
                
                <div className="flex gap-4 py-3 border-t border-b border-white/10 mb-4">
                  <span className="text-sm text-[#A0A0A0]">
                    <FaBed className="text-[#D4AF37] inline mr-1" /> {items?.bedrooms} Beds
                  </span>
                  <span className="text-sm text-[#A0A0A0]">
                    <FaBath className="text-[#D4AF37] inline mr-1" /> {items?.bathrooms} Baths
                  </span>
                  <span className="text-sm text-[#A0A0A0]">
                    <FaRulerCombined className="text-[#D4AF37] inline mr-1" />{items?.area} sqft
                  </span>
                </div>

                <Link to={`/property/${items.id}`}>
                  <button className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                    View Property →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Simple No Properties Found Message */}
        {!isLoading && filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-[#D4AF37]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/30">
              <FaSearch className="text-3xl text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Properties Found for Rent</h3>
            <p className="text-[#A0A0A0] mb-6">
              {location || category || price 
                ? "No rental properties match your current filters. Try adjusting your search criteria."
                : "There are currently no rental properties available."}
            </p>
            {(location || category || price) && (
              <button 
                onClick={clearFilters}
                className="px-6 py-2 bg-[#D4AF37] text-[#0F1115] rounded-xl font-semibold hover:bg-[#B8860B] transition"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
          </div>
        )}

        <div className="text-center mt-12 animate-fade-up-delay-2">
          {showViewAll && (
  <div className="text-center mt-12 animate-fade-up-delay-2">
    <Link to="/rent">
      <button className="bg-transparent border-2 border-[#D4AF37] px-8 py-3 rounded-full text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
        View All Properties →
      </button>
    </Link>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default RentProperties;