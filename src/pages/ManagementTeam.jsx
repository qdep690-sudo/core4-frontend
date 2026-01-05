import React from "react";

const TeamProfileUI = () => {

  const boardOfDirectors = [
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      imgSrc: "/images/T1.png",
    },
    {
      name: "Hosahalli Appagigowda Savitha",
      designation: "Whole-time Director",
      imgSrc: "/images/T2.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Director",
      imgSrc: "/images/T3.png",
    },
    {
      name: "Anala",
      designation: "Independent Director",
      imgSrc: "/images/T4.png",
    },
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      imgSrc: "/images/T5.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Director & Chairperson",
      imgSrc: "/images/T6.png",
    },
  ];

  const auditCommittee = [
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/T6.png",
    },
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/T5.png",
    },
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      committeeRole: "Member",
      imgSrc: "/images/T1.png",
    },
  ];

  const stakeholdersCommittee = [
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/T5.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/T6.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Whole-time Director",
      committeeRole: "Member",
      imgSrc: "/images/T3.png",
    },
  ];

  const nominationCommittee = [
    {
      name: "Kikkeri Putte Gowda Jayaramu",
      designation: "Independent Director",
      committeeRole: "Chairman",
      imgSrc: "/images/T5.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/T6.png",
    },
    {
      name: "Anala",
      designation: "Non-Executive Director",
      committeeRole: "Member",
      imgSrc: "/images/T4.png",
    },
  ];

  const csrCommittee = [
    {
      name: "Agrahara Chamaraje Gowda Abhinandan",
      designation: "Managing Director",
      committeeRole: "Chairman",
      imgSrc: "/images/T1.png",
    },
    {
      name: "Mahadevappa Tejus",
      designation: "Whole-time Director ",
      committeeRole: "Member",
      imgSrc: "/images/T3.png",
    },
    {
      name: "Mysore Govindaraju Yashwanthkumar",
      designation: "Independent Director",
      committeeRole: "Member",
      imgSrc: "/images/T6.png",
    },
  ];

  const Section = ({ title, members }) => (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-x-14 gap-y-12">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center w-[180px]">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              {member.name}
            </h3>
            {member.designation && (
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {member.designation}
              </p>
            )}

            {member.committeeRole && (
              <p className="text-xs md:text-sm text-gray-400">
                {member.committeeRole}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-24">

        <Section title="Board of Directors" members={boardOfDirectors} />
        <Section title="Audit Committee" members={auditCommittee} />
        <Section title="Stakeholders’ Relationship Committee" members={stakeholdersCommittee} />
        <Section title="Nomination and Remuneration Committee" members={nominationCommittee} />
        <Section title="Corporate Social Responsibility (CSR) Committee" members={csrCommittee} />

      </div>
    </div>
  );
};

export default TeamProfileUI;
