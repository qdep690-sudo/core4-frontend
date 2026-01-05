import React from "react";

const AnnualReturns = () => {
  return (
    <div className="min-h-screen">

      {/* ===== BLUE BANNER HEADER ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Annual Returns
          </h1>

          <div className="flex items-center space-x-2 text-xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Annual Returns</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Title */}
          <h2 className="text-5xl font-semibold text-center text-gray-900">
            Annual Returns
          </h2>
        </div>
        </div>
    </div>
  );
};

export default AnnualReturns;
