import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { WishlistIcon } from '../ui/Wishlisticon';
import { useEffect, useState } from 'react';
import { getProperties } from '../../api/getApi';
import { Gallery } from '../properties/Gallery';
import { Link } from 'react-router-dom';

const PropertiesRentHome = ({ setIsLoginOpen, showViewAll = true }) => {
  const [Properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProperties = Properties.filter((item) =>
    item.property_type?.includes("For Rent")
  );

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setIsLoading(true);
      const data = await getProperties();
      setProperties(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Properties For <span className="text-[#D4AF37]">Rent</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto text-lg">
            Discover our curated collection of luxury rental properties
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties?.slice(0, 6).map((items, index) => (
                <div key={index} className="group bg-[#171B22] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-[280px] overflow-hidden">
                    <WishlistIcon property={items} setIsLoginOpen={setIsLoginOpen} />
                    
                    <Gallery items={items} />

                    <div className="absolute top-4 left-4 bg-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold text-[#0F1115] uppercase">
                      {items?.property_type}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#0F1115]/80 px-4 py-2 rounded-full text-lg font-bold text-[#D4AF37]">
                      ${items?.price} <span className="text-xs font-normal text-[#A0A0A0]">/ total</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition">
                      {items.title}
                    </h3>
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

            {/* No Properties Found */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-2">No Properties Found for Rent</h3>
                <p className="text-[#A0A0A0]">There are currently no rental properties available.</p>
              </div>
            )}

            {/* View All Button */}
            {showViewAll && filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <Link to="/rent">
                  <button className="bg-transparent border-2 border-[#D4AF37] px-8 py-3 rounded-full text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-[#0F1115] transition">
                    View All Properties →
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertiesRentHome;