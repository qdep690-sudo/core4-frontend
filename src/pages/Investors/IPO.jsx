import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const industryDocuments = [
  {
    title: "Industry Report",
    filePath: "/pdf/ipo/industry-report.pdf",
  },
];

const prospectusDocuments = [
  {
    title: "Draft Prospectus",
    filePath: "/pdf/ipo/draft-prospectus.pdf",
  },
];

export default function IPO() {
  const [activeTab, setActiveTab] = useState("industry");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">IPO</h1>
          <div className="flex items-center space-x-2 text-3xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>IPO</span>
          </div>
        </div>
      </div>

      {/* IPO DOCUMENTS SECTION */}
      <div className="container mx-auto px-6 sm:px-10 py-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
          IPO Documents
        </h2>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab("industry")}
            className={`px-8 py-3 font-semibold rounded ${
              activeTab === "industry"
                ? "bg-green-700 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Industry Report
          </button>

          <button
            onClick={() => setActiveTab("prospectus")}
            className={`px-8 py-3 font-semibold rounded ${
              activeTab === "prospectus"
                ? "bg-green-700 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Draft Prospectus
          </button>
        </div>

        {/* CONTENT BELOW TOGGLE */}
        <div className="flex flex-col items-start space-y-4">
          {(activeTab === "industry"
            ? industryDocuments
            : prospectusDocuments
          ).map((doc, index) => (
            <a
              key={index}
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-xl sm:text-xl">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
