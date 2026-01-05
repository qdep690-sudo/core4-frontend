import { useEffect, useRef, useState } from "react";
import { Star, User, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Ajay Kumar G",
    review:
      "We have been working with Core4 engineers Ltd for multiple projects over the years. Their consistency, technical strength, and responsive support make them our preferred electrical contractor.",
    rating: 5,
  },
  {
    name: "Deepak R",
    review:
      "We partnered with Core4 engineers Ltd for our electrical installations and commissioning works. Their technical expertise, compliance with standards, and project coordination were excellent. The work was delivered on time and within budget.",
    rating: 5,
  },
  {
    name: "Prashant Kumar",
    review:
      "Core4 successfully executed our complete electrical scope including HT/LT panels, cabling, and testing. Their end-to-end project management reduced downtime and ensured smooth commissioning.",
    rating: 4,
  },
  {
    name: "Prakash Rao",
    review:
      "Their engineers provided practical solutions that improved system efficiency and reduced costs. The team’s approach reflects strong domain knowledge and experience.",
    rating: 4,
  },
  {
    name: "Cheyesh",
    review:
      "From initial discussions to final handover, the team maintained transparency and professionalism. We are extremely satisfied with the outcome.",
    rating: 5,
  },
];

// Duplicate testimonials for seamless scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonial() {
  const scrollRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
  const container = scrollRef.current;
  let position = 0;
  const speed = 0.3; // VERY slow – adjust if needed

  function scroll() {
    if (!container) return;

    position += speed;
    container.scrollLeft = position;

    if (position >= container.scrollWidth / 2) {
      position = 0;
      container.scrollLeft = 0;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}, []);


  return (
    <div
      id="Testimonial"
      className="w-full max-w-6xl mx-auto py-10 text-center overflow-hidden px-4 sm:px-6 md:px-8"
    >
      <h2
        className="text-2xl sm:text-4xl font-bold text-blue-600"
        data-aos="fade-up"
      >
        Testimonial
      </h2>
      <p className="text-gray-600 mt-2 text-lg sm:text-xl" data-aos="fade-up">
        Building Excellence, One Structure At A Time
      </p>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 sm:space-x-6 overflow-hidden mt-6 px-4 sm:px-10 py-5"
        style={{ whiteSpace: "nowrap" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[90%] xs:w-[70%] sm:w-[48%] md:w-[30%] bg-white rounded-lg shadow-lg p-4 sm:p-5 border border-gray-200 text-left h-auto hover:shadow-xl transition-all cursor-pointer"
            data-aos="fade-up"
            onClick={() => setSelectedTestimonial(testimonial)}
          >
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
              <h3 className="font-semibold text-xl sm:text-xl">
                {testimonial.name}
              </h3>
            </div>

            {/* Star Rating */}
            <div className="flex mt-1 sm:mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Short Review Inside the Card */}
            <p className="text-gray-600 mt-2 sm:mt-3 text-lg sm:text-lg leading-relaxed line-clamp-3">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full relative"
            data-aos="zoom-in"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-semibold">{selectedTestimonial.name}</h3>

            <div className="flex justify-center mt-2">
              {Array.from({ length: selectedTestimonial.rating }, (_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              {selectedTestimonial.review}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}