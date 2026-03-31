import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const materialDocs = [
  {
    title: "Certificate of Incorporation",
    filePath: "/pdf/material-docs/01.CertificateofIncorporation.pdf",
  },
  {
    title: "Public Certificate of Incorporation",
    filePath: "/pdf/material-docs/02.PublicCertificateofIncorporation.pdf",
  },
  {
    title: "Board Resolution IPO_09.10.2025",
    filePath: "/pdf/material-docs/03.BoardResolutionIPO_09.10.2025.pdf",
  },
  {
    title: "Special Resolution IPO_15.10.2025",
    filePath: "/pdf/material-docs/04.SpecialResolutionIPO_15.10.2025.pdf",
  },
  {
    title: "MOAAOA Core4 Engineers",
    filePath: "/pdf/material-docs/05.MOAAOACore4Engineers.pdf",
  },
  {
    title: "Audit Committee Resolution-KPI-Revised",
    filePath: "/pdf/material-docs/06.Auditcommitteeresolution-KPI-Revised.pdf",
  },
  {
    title: "Consents & Certificates",
    filePath: "/pdf/material-docs/07.Consents&Certificates.pdf",
  },
];

export default function MaterialDocs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            Material Documents
          </h1>

          <div className="flex items-center space-x-2 text-lg sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Material Documents</span>
          </div>
        </div>
      </div>

      {/* ===== DOCUMENT LIST ===== */}
      <div className="container mx-auto px-6 sm:px-10 py-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
          Material Documents
        </h2>

        <div className="flex flex-col items-start space-y-4">

          {materialDocs.map((doc, index) => (
            <a
              key={index}
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-base sm:text-xl">
                {doc.title}
              </span>
            </a>
          ))}

        </div>
      </div>

    </div>
  );
}