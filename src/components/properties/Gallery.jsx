import { useState } from "react";

export const Gallery = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const gallery =
    items?.gallery?.length > 0
      ? items.gallery
      : [items?.featured_image];

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

  return (
    <div className="relative h-[280px] overflow-hidden">

      {/* Image */}
      <img
        src={gallery[currentImage]}
        alt={items?.title}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Previous */}
      {gallery.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
        >
          ←
        </button>
      )}

      {/* Next */}
      {gallery.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 bg-[#0F1115]/80 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
        >
          →
        </button>
      )}

      {/* Dots */}
      {gallery.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {gallery.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                currentImage === index
                  ? "bg-[#D4AF37]"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};