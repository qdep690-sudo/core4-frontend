import React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="images\bridge_02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center px-4">
        <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl md:text-7xl font-bold">TO SECURE A SUSTAINABLE FUTURE</h1>
        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-4xl md:text-6xl mt-6">CORE4 ENGINEER's VISION</h2>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Hero Us</h1>
//       <p>We specialize in water revitalization and sustainable solutions.</p>
//     </div>
//   );
// };

// export default Hero;
