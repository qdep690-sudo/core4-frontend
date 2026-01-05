import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  const items = [
    { label: "Details of Business", path: "/business-details", icon: "/images/investors icon/iv1.png" },
    { label: "List of KMP & SMP", path: "/kmp", icon: "/images/investors icon/iv2.png" },
    { label: "Board Of Directors", path: "/board-of-directors", icon: "/images/investors icon/iv3.png" },
    { label: "Share Holders Documents", path: "/share-docs", icon: "/images/investors icon/iv4.png" },
    { label: "Board Committees", path: "/board-committee", icon: "/images/investors icon/iv5.png" },
    { label: "Financial Results", path: "/financial-results", icon: "/images/investors icon/iv6.png" },
    { label: "Share Holding Patterns", path: "/share-patterns", icon: "/images/investors icon/iv7.png" },
    { label: "Banking Partners", path: "/banking", icon: "/images/investors icon/iv23.png" },
    { label: "Board Meeting Notice and Outcome", path: "/board-notice", icon: "/images/investors icon/iv8.png" },
    { label: "Subsidiary,Associate & JV Financials", path: "/subsidary-finance", icon: "/images/investors icon/iv9.png" },
    { label: "Corporate Policies", path: "/corporate-policies", icon: "/images/investors icon/iv11.png" },
    { label: "Annual Report ", path: "/reports", icon: "/images/investors icon/iv12.png" },
    { label: "IPO", path: "/ipo", icon: "/images/investors icon/iv13.png" },
    { label: "Annual Returns", path: "/annual-returns", icon: "/images/investors icon/iv14.png" },
    { label: "News & Information", path: "/news-information", icon: "/images/investors icon/iv15.png" },
    { label: "Corporate Announcements", path: "/corporate-announcements", icon: "/images/investors icon/iv16.png" },
    { label: "Corporate Information", path: "/corporate-information", icon: "/images/investors icon/iv17.png" },
    { label: "AGM Notice", path: "/agm-notice", icon: "/images/investors icon/iv18.png" },
    { label: "Material Creditors", path: "/material-creditors", icon: "/images/investors icon/iv19.png" },
    { label: "Material Contracts", path: "/material-contracts", icon: "/images/investors icon/iv20.png" },
    { label: "Material Documents", path: "/material-documents", icon: "/images/investors icon/iv21.png" },
    { label: "Secretarial Components Report", path: "/secretarial-components-report", icon: "/images/investors icon/iv22.png" },
    
  ];

  return (
<div className="min-h-screen flex flex-col items-center bg-gray-50">

  {/* Page Header */}
  <div className="bg-gray-300 py-10 w-full">
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl sm:text-5xl font-bold">
        Investors Info
      </h1>
      <p className="text-gray-700 mt-2">
        Home &gt;&gt; Investors Info
      </p>
    </div>
  </div>

  {/* ✅ Center Heading Below Header */}
  <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mt-10 mb-8 text-center">
    Investors Space
  </h2>

  {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-[80%] mx-auto px-6">
    {items.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="
          bg-white shadow-md rounded-xl p-5 
          flex flex-col items-center justify-center gap-3
          text-center text-lg font-semibold 
          hover:bg-gray-300 hover:text-black 
          transition-all duration-300 border border-gray-200
        "
      >
        <img
          src={item.icon}
          alt={item.label}
          className="w-16 h-16 object-contain"
        />
        {item.label}
      </Link>
    ))}
  </div>

</div>


  );
};

export default Investors;
