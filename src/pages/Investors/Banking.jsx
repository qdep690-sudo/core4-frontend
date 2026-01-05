import React from "react";

export default function KMP() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== Header ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Banking Partners
          </h1>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Home</span>
            <span>»</span>
            <span>Banking Partners</span>
          </div>
        </div>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="container mx-auto px-6 sm:px-10 py-16">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* ===== Bank 1 Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
            <div className="w-40 h-24 md:w-44 md:h-28 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-4">
                <img
                    src="/images/investors icon/SBI.jpeg"
                    alt="SBI"
                    className="max-w-full max-h-full object-contain"
                />
            </div>
              <h2 className="text-2xl font-semibold mb-2">
                State Bank Of India
              </h2>
            </div>

            {/* ===== Bank 2 Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
            <div className="w-40 h-24 md:w-44 md:h-28 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-4">
                <img
                  src="/images/investors icon/BOB.png"  
                  alt="BOB"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                Bank of Baroda
              </h2>
            </div>

            {/* ===== Bank 3 Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-40 h-24 md:w-44 md:h-28 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-4">
                <img
                  src="/images/investors icon/ICICI.png"  
                  alt="ICICI"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                 Industrial Credit and Investment Corporation of India
              </h2>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
