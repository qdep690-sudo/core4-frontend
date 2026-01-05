import React, { useState, useEffect, useRef } from "react";

const images = [
  { src: "/images/products/PR1.png" },
  { src: "/images/products/PR2.png" },
  { src: "/images/products/PR3.png" },
  { src: "/images/products/PR4.png" },
  { src: "/images/products/PR5.png" },
  { src: "/images/products/PR6.png" },
  { src: "/images/products/PR7.png" },
  { src: "/images/products/PR8.png" },
  { src: "/images/products/PR9.png" },
  { src: "/images/products/PR10.png" },
  { src: "/images/products/PR11.png" },
  { src: "/images/products/PR12.png" },
  { src: "/images/products/PR13.png" },
  { src: "/images/products/PR14.png" },
  { src: "/images/products/PR15.png" },
  { src: "/images/products/PR16.png" },
  { src: "/images/products/PR17.png" },
  { src: "/images/products/PJ8.2.png" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    let scrollSpeed = 2;
    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // Reset to the beginning
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-16 py-12">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Better Tomorrow for Generations to Come
        </h2>
        <p className="text-xl text-gray-600 mt-2">
          Built on trust, engineered with precision — we create infrastructure that enhances lives, 
          connects communities, and strengthens the foundation for tomorrow’s growth.
        </p>
      </div>

      {/* Auto-Scrolling Image Gallery */}
      <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap mt-8 pb-4">
        <div className="inline-flex space-x-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[350px] h-56 bg-white flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="max-h-full max-w-full object-contain"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl" 
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="rounded-lg w-full" /> 
            <p className="text-center mt-2 font-semibold text-gray-700">{selectedImage.caption}</p>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Gallery;