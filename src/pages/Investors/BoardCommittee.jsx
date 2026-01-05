import React from "react";

const BoardCommittee = () => {

  const auditCommittee = [
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  const stakeholdersCommittee = [
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Whole-time Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  const nominationCommittee = [
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Anala",
      designation: "Non-Executive Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  const csrCommittee = [
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      committeeRole: "Chairman",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Whole-time Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  const poshCommittee = [
    {
      name: "Ms. Sanjana M B",
      designation: "Presiding Officer",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Ms. Sheela",
      designation: "Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Mr. Sumanth H C ",
      designation: "Member Secretary",
      imgSrc: "/images/investors icon/dummy.png",
    },
    {
      name: "Ms. Pavithra ",
      designation: "External Member",
      imgSrc: "/images/investors icon/dummy.png",
    },
  ];

  const Section = ({ title, members }) => (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-x-14 gap-y-12">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[180px]"
          >
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-gray-200 overflow-hidden mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {member.name}
            </h3>

            <p className="text-sm md:text-lg mt-1">
              {member.designation}
            </p>

            <p className="text-sm md:text-lg text-gray-500">
              {member.committeeRole}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== BLUE BANNER HEADER ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            Board Committees
          </h1>
          <div className="flex items-center space-x-2 text-3xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Board Committees</span>
          </div>
        </div>
      </div>

      {/* ===== COMMITTEE SECTIONS ===== */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">

            {/* Section Title */}
          <h2 className="text-5xl font-semibold text-center text-gray-900">
            Board Committees
          </h2>

          <Section title="Audit Committee" members={auditCommittee} />
          <Section
            title="Stakeholders’ Relationship Committee"
            members={stakeholdersCommittee}
          />
          <Section
            title="Nomination and Remuneration Committee"
            members={nominationCommittee}
          />
          <Section
            title="Corporate Social Responsibility (CSR) Committee"
            members={csrCommittee}
          />
          <Section
            title="Prevention Of Sexual Harassment(POSH) Committee"
            members={poshCommittee}
          />

        </div>
      </div>

    </div>
  );
};

export default BoardCommittee;
