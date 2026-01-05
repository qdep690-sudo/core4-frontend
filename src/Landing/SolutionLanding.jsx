

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const panesData = [
  { 
    color: "#A9B5DF",
    title: "Projects", 
    description: "We build innovative projects that solve real-world problems and push technology forward.",
    img: "/images/v9.jpg",
    path: "/projects", // Add path for each pane
  },
  { 
    color: "#7886C7",
    title: "Products", 
    description: "Our market-ready solutions enhance power distribution, automation, and electrical control for industries.",
    img: "/images/v10.jpg",
    path: "/products", // Add path for each pane
  },
  { 
    color: "#2D336B",
    title: "Services", 
    description: "We offer expert consulting and tailored solutions across various industries for optimal growth.",
    img: "/images/v11.jpg",
    path: "/services", // Add path for each pane
  }
];

export default function PaneContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="antialiased bg-white flex flex-col sm:flex-row justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row flex-grow w-full h-full gap-1 sm:gap-1">
        {panesData.map((pane, index) => (
          <Pane 
            key={index} 
            {...pane} 
            isActive={index === activeIndex} 
            onClick={() => setActiveIndex(index)} 
          />
        ))}
      </div>
    </div>
  );
}

function Pane({ color, title, description, img, isActive, onClick, path }) {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleExploreMore = () => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div
      className={`cursor-pointer duration-300 ease-in-out flex-grow m-1 min-h-[120px] sm:min-h-[600px] overflow-hidden relative rounded-lg
        ${
          isActive
            ? "flex-grow-[10] max-w-full h-[250px] sm:h-full"
            : "max-w-full sm:max-w-[10%] h-[100px] sm:h-auto"
        }
      `}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "#2b4dc0ff"; // hover color for inactive
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = color; // restore original color
        }
      }}
      style={{
        background: isActive
          ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img}) center/cover no-repeat`
          : color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >

      {/* Lightened Overlay for better visibility */}
      {isActive && <div className="absolute inset-0 bg-black bg-opacity-30"></div>}

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6">
        {/* Title */}
        <div className={`text-lg sm:text-2xl md:text-4xl mb-2 ${!isActive ? "sm:rotate-90 sm:whitespace-nowrap" : ""}`}>
          {title}
        </div>

        {/* Description */}
        {isActive && <p className="text-lg sm:text-base md:text-2xl max-w-md text-center">{description}</p>}

        {/* Button */}
        {isActive && (
          <button
            className="mt-2 bg-white text-black py-2 px-4 rounded-md text-lg sm:text-xl hover:bg-gray-200 transition-all"
            onClick={handleExploreMore} // Use the handleExploreMore function
          >
            Explore More
          </button>
        )}
      </div>
    </div>
  );
}