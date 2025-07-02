import React, { useEffect, useState, useRef } from 'react';

const ShowcseGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 400ms
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 1300);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
      {/* Slides */}
      <div
        className="flex transition-transform duration-400 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center bg-white"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[300px] sm:h-[400px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
              index === current ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcseGallery;
