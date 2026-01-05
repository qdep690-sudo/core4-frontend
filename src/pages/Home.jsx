// import Hero from "../Landing/Hero";
// import AboutUs from "../Landing/AboutUs";
// import IndiaMap from "../Landing/India";
// import HomeProjects from "../Landing/HomeProjects";
// import InfrastructureComponent from "../Landing/Infrasturcture";
// import ContactSection from "../Landing/HomeContact";
// import Gallery from "../Landing/HomeGallery";
// import OurClients from "../Landing/Clients";
// import StatsSection from "../Landing/StatsSection";
// import Testimonial from "../Landing/Testimonials";
// import SolutionLanding from "../Landing/SolutionLanding";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../Landing/Hero";
import AboutUs from "../Landing/AboutUs";
import IndiaMap from "../Landing/India";
import HomeProjects from "../Landing/HomeProjects";
import InfrastructureComponent from "../Landing/Infrasturcture";
import ContactSection from "../Landing/HomeContact";
import Gallery from "../Landing/HomeGallery";
import OurClients from "../Landing/Clients";
import StatsSection from "../Landing/StatsSection";
import Testimonial from "../Landing/Testimonials";
import SolutionLanding from "../Landing/SolutionLanding";
import MarqueeNews from "../Landing/Marquee";
import LatestUpdates from "../Landing/LatestUpdate";
import WatsAppFloating from "../Landing/watsapp-floating";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      {/* <MarqueeNews /> */}
      <Hero />

      {/* About Section */}
      <div id="about-section">
        <AboutUs />
      </div>

      <IndiaMap />
      <HomeProjects />
      <LatestUpdates />
      <InfrastructureComponent />
      <SolutionLanding />

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>

      <Gallery />
      <OurClients />
      <StatsSection />
      <Testimonial />
      <WatsAppFloating />
    </>
  );
};

export default Home;
