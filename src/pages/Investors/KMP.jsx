import React from "react";

export default function KMP() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== Header ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            KMP & SMP
          </h1>
          <div className="flex items-center space-x-2 text-3xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>List Of KMP & SMP</span>
          </div>
        </div>
      </div>
   

      {/* ===== Cards Section ===== */}
      <div className="container mx-auto px-6 sm:px-10 py-16">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
           Key Managerial Personnel (KMP)
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* ===== CTO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"  
                  alt="CS"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CTO
              </h2>
              <p className="text-lg font-medium">
                Mr. Siddesh N
              </p>
              <p className="text-gray-600 mt-1">
                Chief Technical Officer
              </p>
            </div>

            {/* ===== CFO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"   
                  alt="CFO"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CFO
              </h2>
              <p className="text-lg font-medium">
                Mr. Vinodkumar S
              </p>
              <p className="text-gray-600 mt-1">
                Chief Financial Officer
              </p>
            </div>

            {/* ===== CS Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"  
                  alt="CS"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CS
              </h2>
              <p className="text-lg font-medium">
                Ms. Theja R
              </p>
              <p className="text-gray-600 mt-1">
                Company Secretary
              </p>
            </div>


          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 py-16">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
           Senior Management Personnel (SMP)
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* ===== CTO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"  
                  alt="CS"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* <h2 className="text-2xl font-semibold mb-2">
                CTO
              </h2> */}
              <p className="text-lg font-medium">
                Harsha Kumar C D
              </p>
              <p className="text-gray-600 mt-1">
                Vice President-Gen Works
              </p>
            </div>

            {/* ===== CFO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"   
                  alt="CFO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* <h2 className="text-2xl font-semibold mb-2">
                CFO
              </h2> */}
              <p className="text-lg font-medium">
                Nischith P
              </p>
              <p className="text-gray-600 mt-1">
                Vice President-B2C Works 
              </p>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}
