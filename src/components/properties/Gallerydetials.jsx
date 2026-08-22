import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { WishlistIcon } from "../ui/Wishlisticon";

function Gallerydetials({ property }) {
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(0);

  // Images from API
  const images =
    property?.gallery?.length > 0
      ? property.gallery
      : property?.featured_image
      ? [property.featured_image]
      : [];

  useEffect(() => {
    setActiveImage(0);
  }, [property]);

  const nextImage = () => {
    if (!images.length) return;

    setActiveImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!images.length) return;

    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!property) {
    return (
      <div className="text-center py-20 text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#D4AF37] transition mb-8"
      >
        <FaArrowLeft />
        Back to Properties
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
        {/* Main Image */}
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-[500px] bg-[#171B22]">
          <img
            src={images[activeImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F1115]/80 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F1115]/80 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition"
          >
            <FaChevronRight />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {activeImage + 1} / {images.length}
          </div>

          {/* Property Type */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37]">
              {property?.property_type?.[0]}
            </span>
          </div>

          {/* Wishlist */}
          <WishlistIcon property={property} />
        </div>

        {/* Right Gallery */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {images.slice(0, 4).map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative rounded-xl overflow-hidden h-[240px] cursor-pointer transition ${
                activeImage === index
                  ? "ring-2 ring-[#D4AF37]"
                  : "hover:opacity-90"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* More Images Overlay */}
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    +{images.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallerydetials;