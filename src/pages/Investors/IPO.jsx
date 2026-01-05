


import { useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ipoDocuments = [
    // { title: "Draft Offer Documents", link: "#draft-offer-documents" },
    // { title: "Addendum to DRHP", link: "#addendum-to-drhp" },
    // { title: "Addendum to DRHP-13/06/2024", link: "#addendum-to-drhp-13-06-2024" },
    // { title: "Addendum to DRHP-30/11/2024", link: "#addendum-to-drhp-30-11-2024" },
    // { title: "RHP 16/01/2025", link: "#rhp-16-01-2025" },
    // { title: "Core4 engineers - Prospectus 27/01/2025", link: "#prospectus-27-01-2025" },
    // { title: "Basis of Allotment", link: "#basis-of-allotment" }
];

export default function IPO() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <div className="bg-blue-700 text-white py-16">
                <div className="container mx-auto px-6 sm:px-10">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">IPO </h1>
                    <div className="flex items-center space-x-2 text-sm sm:text-base">
                        <span>Home</span>
                        <span>»</span>
                        <span>IPO</span>
                    </div>
                </div>
            </div>

            {/* Documents Section */}
            <div className="container mx-auto px-6 sm:px-10 py-8">
                <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
                    IPO Documents
                </h2>
                <div className="flex flex-col items-start space-y-4">
                    {ipoDocuments.map((document) => (
                        <a
                            key={document.title}
                            href={document.link}
                            download
                            className="flex items-center w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            data-aos="fade-up"
                        >
                            <ChevronRight size={16} className="mr-2" />
                            <span className="flex-1 text-sm sm:text-base">{document.title}</span>
                            <Download size={20} className="ml-2" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
