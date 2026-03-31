import { useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reportDocuments = [
  {
    title: "Annual Report - 2023",
    filePath: "/pdf/annual-reports/Annual-Report-2023.pdf",
  },
  {
    title: "Annual Report - 2024",
    filePath: "/pdf/annual-reports/Annual-Report-2024.pdf",
  },
  {
    title: "Annual Report - 2025",
    filePath: "/pdf/annual-reports/Annual-Report-2025.pdf",
  },
];

export default function Reports() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            Annual Reports
          </h1>
          <div className="flex items-center space-x-2 text-lg sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Annual Reports</span>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="container mx-auto px-6 sm:px-10 py-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
          Annual Reports
        </h2>
        <div className="flex flex-col items-start space-y-4">

          {reportDocuments.map((doc, index) => (
            <a
              key={index}
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-base sm:text-xl ">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
