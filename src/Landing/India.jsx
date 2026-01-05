import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mapImage from "/images/india.png";
import locationPin from "/images/location1.png";

// ⭐ Projects with MULTIPLE coordinates
const projects = [
  { 
    name: <>Railway Electrification at Karnataka and Tamil Nadu.</>,
    locations: [{ x: "40%", y: "83%" }]
  },
  { 
    name: <>
      Substation works at Karnataka, Telangana, Andra Pradesh, Uttar Pradesh, <br />
      Kerala, Tamil Nadu, Jammu & Kashmir, Delhi, Odisha & Etc.
    </>,
    locations: [
      { x: "32%", y: "70%" }, { x: "40%", y: "73%" }, { x: "42%", y: "66%" },
      { x: "46%", y: "39%" }, { x: "34%", y: "85%" }, { x: "39%", y: "86%" },
      { x: "35%", y: "15%" }, { x: "36%", y: "34%" }, { x: "58%", y: "55%" }
    ]
  },
  { 
    name: <>Sewage Treatment Plant across Karnataka.</>,
    locations: [{ x: "32%", y: "75%" }]
  },
  { 
    name: <>
      Station Re-development and Railway Infrastructure Development <br />
      across Karnataka, Maharashtra, Odisha, and other regions.
    </>,
    locations: [{ x: "34%", y: "79%" }, { x: "32%", y: "63%" }, { x: "54%", y: "59%" }]
  },
  { 
    name: <>Video Surveillance System at Rajasthan.</>,
    locations: [{ x: "32%", y: "40%" }]
  },
  { 
    name: <>
      Implementation of Coach Watering System across Karnataka, Madhya Pradesh,<br />
      Odisha, Jammu and Andra Pradesh
    </>,
    locations: 
      [{ x: "31%", y: "78%" }, { x: "37%", y: "50%" }, { x: "54%", y: "55%" }, 
      { x: "30%", y: "17%" }, { x: "40%", y: "76%" }]
  },
  { 
    name: <>
      Providing SCADA system with allied Electrical & Mechanical (E&M) <br /> 
      components to water supply system at Karnataka
    </>,
    locations: 
      [{ x: "32%", y: "80%" }]
  },
  { 
    name: <>
      Provision of VCB's and RMU's in HT power supply across Karnataka, <br />
      Andra Pradesh, Telengana, odisha, Kerala, Tamil Nadu.
    </>,
    locations: 
      [{ x: "30%", y: "75%" }, { x: "38%", y: "74%" }, { x: "38%", y: "68%" },
        { x: "57%", y: "58%" },{ x: "34%", y: "88%" }, { x: "37%", y: "84%" },]
  },
];

export default function IndiaMap() {
  const [hoveredProject, setHoveredProject] = useState(projects[0]);
  const [hoveredLocation, setHoveredLocation] = useState(projects[0].locations[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % projects.length;
      setActiveIndex(nextIndex);
      setHoveredProject(projects[nextIndex]);
      setHoveredLocation(projects[nextIndex].locations[0]);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovering]);

  return (
    <div className="bg-white flex flex-col items-center justify-center gap-6 p-6">

      {/* Header */}
      <h2 className="text-2xl md:text-5xl font-bold text-red-600 text-center" data-aos="fade-up">
        100+ Projects Across India
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* India Map */}
        <div className="relative w-full max-w-xl sm:max-w-2xl md:w-[600px]" data-aos="fade-right">
          <img src={mapImage} alt="India Map" className="w-full h-auto" />

          {projects.map((project, pIndex) =>
            project.locations.map((loc, i) => (
              <div
                key={`${pIndex}-${i}`}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
                style={{ left: loc.x, top: loc.y }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredProject(project);
                  setHoveredLocation(loc);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img src={locationPin} alt="Location Pin" className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
            ))
          )}

          {hoveredProject && hoveredLocation && (
            <div
              className="absolute bg-white text-black text-xs sm:text-sm p-2 border shadow rounded"
              style={{
                left: hoveredLocation.x,
                top: `calc(${hoveredLocation.y} - 30px)`,
                transform: "translate(-50%, -100%)",
                whiteSpace: "nowrap",
              }}
            >
              {hoveredProject.name}
            </div>
          )}
        </div>

        {/* ⭐ Auto-scrolling project list */}
        <div className="hidden md:block w-full md:w-[520px]" data-aos="fade-left">
          <div className="h-[300px] overflow-hidden">
            <ul
              className="space-y-3 scroll-up"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {projects.concat(projects).map((project, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg cursor-pointer hover:text-red-900"
                  onMouseEnter={() => {
                    setHoveredProject(project);
                    setHoveredLocation(project.locations[0]);
                  }}
                >
                  <span className="w-3 h-3 mt-2 bg-red-600 rounded-full"></span>
                  {project.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Inline animation */}
          <style>
            {`
              .scroll-up {
                animation: scrollUp 18s linear infinite;
              }

              @keyframes scrollUp {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}
          </style>
        </div>

      </div>
    </div>
  );
}
