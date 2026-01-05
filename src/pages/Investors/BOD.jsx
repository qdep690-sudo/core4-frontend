import React from "react";

const BoardOfDirectors = () => {
  const boardOfDirectors = [
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Hosahalli Appagigowda Savitha",
      designation: "Whole-time Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Whole-time Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Anala",
      designation: "Non-Executive Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== BLUE BANNER HEADER ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Board of Directors
          </h1>
          <div className="flex items-center space-x-2 text-xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Board of Directors</span>
          </div>
        </div>
      </div>

      {/* ===== WHITE BOD SECTION ===== */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Section Title */}
          <h2 className="text-5xl font-semibold text-center text-gray-900">
            Board of Directors
          </h2>

          {/* Directors Grid */}
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-12">
            {boardOfDirectors.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-[280px]"
              >
                <div className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-sm md:text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-xs md:text-lg text-gray-500 mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default BoardOfDirectors;
