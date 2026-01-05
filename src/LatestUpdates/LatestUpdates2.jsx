import React from "react";
import { Link } from "react-router-dom";

const LatestUpdates2 = () => {
  const cards = [
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },
    { title: "Core4 Engineers: Core4 engineers IPO Note", link: "/link" },

  ];

  return (
    <div className="py-4 bg-gray-50 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl px-4">
        {cards.map((card, index) => (
          <Link to={card.link} key={index} className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates2;