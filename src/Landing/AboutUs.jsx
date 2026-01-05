import { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("AboutUs");

  const content = {
  AboutUs: {
    shortText: (
      <>
        <strong>CORE4 ENGINEERS Limited </strong>
        is a multidisciplinary Engineering, Procurement, Construction,
        and Commissioning (EPCC) company founded in the year 2014, with commitment to deliver
        innovative, sustainable, and high-quality solutions across a wide range of industries such as
        – Railway Infrastructure, EHV Transmission and Distribution, Water and Waste water
        treatment, Manufacturing Power Quality &amp; Distribution Panels, SCADA and Automation
        systems, Infrastructure Projects under PPP mode. Established with a vision to redefine
        engineering excellence, we combine technical expertise, creative problem-solving, and a
        client-focused approach to bring every project to life with precision and purpose considering
        economic viability.
        <br /><br />
      </>
    ),

    fullText: (
      <>
        <strong>CORE4 ENGINEERS Limited </strong>
        is a multidisciplinary Engineering, Procurement, Construction,
        and Commissioning (EPCC) company founded in the year 2014, with commitment to deliver
        innovative, sustainable, and high-quality solutions across a wide range of industries such as
        – Railway Infrastructure, EHV Transmission and Distribution, Water and Waste water
        treatment, Manufacturing Power Quality &amp; Distribution Panels, SCADA and Automation
        systems, Infrastructure Projects under PPP mode. Established with a vision to redefine
        engineering excellence, we combine technical expertise, creative problem-solving, and a
        client-focused approach to bring every project to life with precision and purpose considering
        economic viability.
        <br /><br />

        At <strong>CORE4,</strong> we believe in the strength of our four core values
        <strong> — Commitment, Collaboration, Competence, and Creativity — </strong>
        which drive every aspect of our work. From concept to completion, we work closely with
        clients to ensure projects are executed efficiently, safely, and sustainably.
        <br /><br />

        Our team of experienced engineers, designers, and project managers brings together years
        of professional expertise and cutting-edge technology to deliver results that exceed
        expectations. Whether it’s Railway Infrastructure development, Industrial Projects, Power
        Projects, or specialized engineering services,
        <strong> CORE4 ENGINEERS Limited </strong>
        is your trusted partner for reliable, innovative, and cost-effective engineering solutions.
        <br /><br />

        We are not just engineers — we are problem solvers, innovators, and collaborators,
        dedicated to shaping a better and smarter built environment for future generations.
      </>
    ),

    image: "/images/about-us.png",
  },
};

// TOGGLE FOR READ MORE
const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className="text-lg text-gray-700 leading-relaxed">
        {expanded ? content.AboutUs.fullText : content.AboutUs.shortText}

        <span
          className="text-green-600 font-semibold cursor-pointer hover:underline ml-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less..." : "Read More..."}
        </span>
      </p>
    </div>
  );
};



  return (
    <section className="px-4 py-12 bg-gray-100 md:px-8 lg:px-16">
      {/* Main About Us Section */}
      <div data-aos="fade-up" data-aos-duration="1000" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-center md:text-left">
            CORE4 ENGINEERS LIMITED
          </h1>
          <div className="text-center md:text-left mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              About Us
            </h2>
            <div className="w-16 h-0.5 bg-green-500 mx-auto md:mx-0 mt-2"></div>
          </div>

          <div className="mt-4 text-gray-700 text-justify">
            <AboutSection />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <h2 className="text-lg md:text-xl font-bold">20+</h2>
              <p className="text-gray-500">States Covered Across India</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">148</h2>
              <p className="text-gray-500">Completed Projects</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">11+</h2>
              <p className="text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative text-center">
          <img
            src={content[activeTab].image}
            alt={activeTab}
            className="w-full rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div data-aos="fade-up" data-aos-duration="2000"className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative text-center">
              <img
                src="/images/mission.jpg"
                alt="Our Mission"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-center md:text-left mb-4">
              <h2 className="text-2xl md:text-3xl font-bold inline-block">
                Our Mission
              </h2>
              <div className="w-16 h-0.5 bg-green-500 mx-auto md:mx-0 mt-2"></div>
            </div>
            <p className="text-lg text-gray-700 text-justify">
              To deliver high-quality, sustainable, and value-driven engineering solutions that meet the
              evolving needs of our clients and communities.
            </p>
          </div>
        </div>
      </div>
      

      {/* Our Mission Section */}
      <div data-aos="fade-up" data-aos-duration="3000"className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-center md:text-left mb-4">
              <h2 className="text-2xl md:text-3xl font-bold inline-block">
                Our Vision
              </h2>
              <div className="w-16 h-0.5 bg-green-500 mx-auto md:mx-0 mt-2"></div>
            </div>
            <p className="text-lg text-gray-700 text-justify">
              To be a leading engineering firm recognized for excellence, innovation, and integrity in every project we undertake.
              <br /> <br />
              {/* <strong>Our Core Values :-</strong><br /> */}
              <strong>● Commitment – </strong>Dedicated to delivering excellence in every detail.<br /><strong>●Collaboration – </strong>Building lasting partnerships through teamwork &nbsp;&nbsp;&nbsp;&nbsp;and transparency.<br /><strong>●Competence – </strong>Combining technical expertise with continuous &nbsp;&nbsp;&nbsp;&nbsp;learning.<br /><strong>● Creativity – </strong>Driving innovation to meet complex challenges.            
            </p>
          </div>
          <div className="relative text-center">
            <img
              src="/images/projects/PJ6.1.png"
              alt="Our Vision"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
