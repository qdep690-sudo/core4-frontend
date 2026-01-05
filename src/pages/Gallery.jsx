// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const images = [
//   { src: "/images/Ga1.jpg", alt: "Electric poles with wires", caption: "Electrical Infrastructure" },
//   { src: "/images/Ga2.jpg", alt: "Construction workers on-site", caption: "Ongoing Construction" },
//   { src: "/images/Ga3.jpg", alt: "Modern building exterior", caption: "Architectural Design" },
//   { src: "/images/Ga4.jpg", alt: "Excavator at work", caption: "Earthworks & Excavation" },
//   { src: "/images/Ga5.jpg", alt: "Bridge construction site", caption: "Bridge Engineering" },
//   { src: "/images/Ga6.jpg", alt: "Road being paved", caption: "Road Development" },
//   { src: "/images/Ga7.jpg", alt: "Steel framework of a building", caption: "Structural Engineering" },
//   { src: "/images/Ga8.jpg", alt: "Green building with solar panels", caption: "Sustainable Construction" },
//   { src: "/images/Ga9.jpg", alt: "Blueprints and tools on a desk", caption: "Project Planning & Design" },
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Initialize AOS on component mount
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="p-4 md:p-8 bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-6" data-aos="fade-up">
//         <div className="inline-block text-blue-600 px-4 py-1 rounded-md text-3xl md:text-4xl font-bold">
//           Gallery
//         </div>
//         <h2 className="text-lg md:text-2xl font-bold mt-2">“Foundation Today, Landmark Tomorrow”</h2>
//         <p className="text-gray-600 mt-1 text-sm md:text-base">
//           Innovative Building Solutions That Blend Design, Durability, And Sustainability.
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
//             onClick={() => setSelectedImage(image)}
//             data-aos="zoom-in"
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-48 sm:h-56 md:h-60 object-cover"
//             />
//             {/* Caption Overlay */}
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-1 sm:p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//               {image.caption}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal (Lightbox) */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative w-full max-w-lg sm:max-w-2xl p-4" data-aos="fade-in">
//             <button
//               className="absolute top-2 right-2 text-white text-2xl bg-gray-700 rounded-full px-3 py-1"
//               onClick={() => setSelectedImage(null)}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images from API
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("http://127.0.0.1:8000/api/images/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.images);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading gallery...</div>;
  if (error) return <div className="text-center text-red-600 py-10">Error: {error}</div>;

  return (
    <section className="p-4 md:p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-6" data-aos="fade-up">
        <div className="inline-block text-blue-600 px-4 py-1 rounded-md text-3xl md:text-4xl font-bold">
          Gallery
        </div>
        <h2 className="text-lg md:text-2xl font-bold mt-2">“Foundation Today, Landmark Tomorrow”</h2>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Innovative Building Solutions That Blend Design, Durability, And Sustainability.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
            data-aos="zoom-in"
          >
            <img
              src={image.image_url}
              alt={image.caption || `Gallery image ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-1 sm:p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-lg sm:max-w-2xl p-4" data-aos="fade-in">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-700 rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <div className="text-center text-white mt-3">{selectedImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
