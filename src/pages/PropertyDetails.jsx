import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";
import { 
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, 
  FaHeart, FaRegHeart, FaShare, FaPrint, FaArrowLeft,
  FaCar, FaSwimmingPool, FaWifi, FaUtensils, FaDumbbell, FaTree,
  FaCamera, FaVideo, FaCalendarCheck, FaPhone, FaEnvelope,
  FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight, FaTimes
} from 'react-icons/fa';
import ContactForm from '../components/ui/ContactForm';
import Cta from '../components/ui/Cta';
import Gallerydetials from '../components/properties/Gallerydetials';
import { toast } from 'react-toastify';
import { getProperties } from "../api/getApi";
import PageLoader from "../components/ui/PageLoader";

const PropertyDetails = () => {
  const { id } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [property, setProperty] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProperties();
        const singleProperty = data.data.find(
          (item) => Number(item.id) === Number(id)
        );
        setProperty(singleProperty);
      } catch (error) {
        console.log("Single Property Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <PageLoader text="Loading Property Details..." />;
  }

  return (
    <>
      <div className="pt-32 pb-12 px-[5%] bg-[#0F1115] min-h-screen">
        <div className="max-w-[1300px] mx-auto">
          
          <Gallerydetials property={property} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              
              <div className="flex flex-wrap justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-2">
                    {property?.title}
                  </h1>
                  <div className="flex items-center gap-2 text-[#A0A0A0]">
                    <FaMapMarkerAlt className="text-[#D4AF37]" />
                    <span>{property?.acf?.address || property?.address}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-[#D4AF37]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                    <span className="text-[#A0A0A0] text-sm">(4.5) 24 Reviews</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 px-6 py-4 rounded-2xl border border-[#D4AF37]/20">
                  <div className="text-3xl font-bold text-[#D4AF37]">${property?.acf?.price || property?.price}</div>
                  <div className="text-[#A0A0A0] text-sm">Total Price</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-white/10 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <FaBed className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[#F8F8F8] font-semibold">{property?.acf?.bedrooms || 0}</div>
                    <div className="text-[#A0A0A0] text-xs">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <FaBath className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[#F8F8F8] font-semibold">{property?.acf?.bathrooms || 0}</div>
                    <div className="text-[#A0A0A0] text-xs">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <FaRulerCombined className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[#F8F8F8] font-semibold">{property?.acf?.area || 0}</div>
                    <div className="text-[#A0A0A0] text-xs">Sq Ft</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <FaCar className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[#F8F8F8] font-semibold">{property?.acf?.garage || 0}</div>
                    <div className="text-[#A0A0A0] text-xs">Garage</div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold text-[#F8F8F8] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#D4AF37] rounded-full"></span>
                  Description
                </h3>
                <div
                  className="text-[#A0A0A0] leading-relaxed space-y-3"
                  dangerouslySetInnerHTML={{
                    __html: property?.description || "",
                  }}
                />
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold text-[#F8F8F8] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#D4AF37] rounded-full"></span>
                  Amenities & Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property?.acf?.amenities?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#171B22] px-4 py-3 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition"
                    >
                      <FaStar className="text-[#D4AF37] text-sm" />
                      <span className="text-[#A0A0A0] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 border border-white/10 sticky top-24 space-y-4">
                
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={property?.acf?.agent_image?.url || 'https://via.placeholder.com/96'}
                      alt={property?.acf?.agent_name || 'Agent'}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#D4AF37]"
                    />
                    <div className="absolute -bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#171B22]"></div>
                  </div>
                  <h4 className="text-[#F8F8F8] font-semibold mt-3">{property?.acf?.agent_name || 'John Doe'}</h4>
                  <p className="text-[#A0A0A0] text-sm">Luxury Property Specialist</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <FaStar className="text-[#D4AF37] text-xs" />
                    <FaStar className="text-[#D4AF37] text-xs" />
                    <FaStar className="text-[#D4AF37] text-xs" />
                    <FaStar className="text-[#D4AF37] text-xs" />
                    <FaStar className="text-[#D4AF37] text-xs" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-[#0F1115] px-4 py-2 rounded-xl border border-white/5">
                    <FaPhone className="text-[#D4AF37] text-sm" />
                    <span className="text-[#A0A0A0] text-sm">{property?.acf?.agent_phone || '+1 234 567 8900'}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#0F1115] px-4 py-2 rounded-xl border border-white/5">
                    <FaEnvelope className="text-[#D4AF37] text-sm" />
                    <span className="text-[#A0A0A0] text-sm">{property?.acf?.agent_email || 'agent@luxury.com'}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 rounded-xl text-[#0F1115] font-bold hover:scale-[1.02] transition flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck />
                  Schedule Tour
                </button>

                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-[#0F1115] py-3 rounded-xl text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0F1115] transition flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  Contact Agent
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowShare(true)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-2 rounded-xl text-[#A0A0A0] border border-white/5 hover:border-[#D4AF37] transition text-sm"
                  >
                    <FaShare />
                    Share
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0F1115] py-2 rounded-xl text-[#A0A0A0] border border-white/5 hover:border-[#D4AF37] transition text-sm"
                  >
                    <FaPrint /> Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        propertyTitle={property?.title || "Modern Hillside Villa"}
        propertyType="For Sale"
      />
      
      {showShare && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#171B22] rounded-2xl p-8 max-w-md w-full border border-white/10 relative animate-fadeIn">
            <button 
              onClick={() => setShowShare(false)}
              className="absolute top-4 right-4 text-[#A0A0A0] hover:text-white transition"
            >
              <FaTimes size={20} />
            </button>
            
            <h3 className="text-2xl font-bold text-[#F8F8F8] mb-2">Share Property</h3>
            <p className="text-[#A0A0A0] text-sm mb-6">Share this property with your friends and family</p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <WhatsappShareButton url={shareUrl} title={`Check out this property: ${property?.title}`}>
                <div className="p-3 bg-[#25D366]/10 rounded-full hover:bg-[#25D366]/20 transition border border-[#25D366]/20">
                  <WhatsappIcon size={48} round />
                </div>
              </WhatsappShareButton>
              
              <FacebookShareButton url={shareUrl} quote={`Check out this property: ${property?.title}`}>
                <div className="p-3 bg-[#1877F2]/10 rounded-full hover:bg-[#1877F2]/20 transition border border-[#1877F2]/20">
                  <FacebookIcon size={48} round />
                </div>
              </FacebookShareButton>
              
              <TwitterShareButton url={shareUrl} title={`Check out this property: ${property?.title}`}>
                <div className="p-3 bg-[#1DA1F2]/10 rounded-full hover:bg-[#1DA1F2]/20 transition border border-[#1DA1F2]/20">
                  <TwitterIcon size={48} round />
                </div>
              </TwitterShareButton>
              
              <TelegramShareButton url={shareUrl} title={`Check out this property: ${property?.title}`}>
                <div className="p-3 bg-[#0088CC]/10 rounded-full hover:bg-[#0088CC]/20 transition border border-[#0088CC]/20">
                  <TelegramIcon size={48} round />
                </div>
              </TelegramShareButton>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 bg-[#0F1115] px-4 py-3 rounded-xl border border-white/5">
                <span className="text-[#A0A0A0] text-sm truncate flex-1">{shareUrl}</span>
                <button 
                  onClick={() => {
                    navigator.clipboard?.writeText(shareUrl);
                    toast.success('Link copied to clipboard!');
                  }}
                  className="text-[#D4AF37] hover:text-[#B8860B] text-sm font-semibold whitespace-nowrap"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Cta />
    </>
  );
};

export default PropertyDetails;