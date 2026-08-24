import { useState } from "react";

export const Gallery = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const gallery =
    items?.gallery?.length > 0
      ? items.gallery
      : items?.featured_image
        ? [items.featured_image]
        : [];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  // No images
  if (gallery.length === 0) {
    return (
      <div className="relative h-[280px] overflow-hidden bg-[#0F1115] flex items-center justify-center">
        <span className="text-white/50">No image available</span>
      </div>
    );
  }

  return (
    <div className="relative h-[280px] overflow-hidden bg-black">

      {/* Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${items?.title || "Gallery image"} ${index + 1}`}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      {gallery.length > 1 && (
        <button
          type="button"
          onClick={prevImage}
          aria-label="Previous image"
          className="
            absolute top-1/2 left-3
            -translate-y-1/2
            w-9 h-9
            bg-[#0F1115]/80
            rounded-full
            flex items-center justify-center
            text-[#D4AF37]
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all duration-300
            z-10
          "
        >
          ←
        </button>
      )}

      {/* Next Button */}
      {gallery.length > 1 && (
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="
            absolute top-1/2 right-3
            -translate-y-1/2
            w-9 h-9
            bg-[#0F1115]/80
            rounded-full
            flex items-center justify-center
            text-[#D4AF37]
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all duration-300
            z-10
          "
        >
          →
        </button>
      )}

      {/* Dots */}
      {gallery.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {gallery.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`
                w-2 h-2
                rounded-full
                cursor-pointer
                transition-all duration-300
                ${
                  currentImage === index
                    ? "bg-[#D4AF37] scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};