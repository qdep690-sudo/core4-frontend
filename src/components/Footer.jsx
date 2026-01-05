// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#0C1D35] text-white py-10 px-6 md:px-16">
//       <div className="container mx-auto text-center md:text-left">
//         {/* Logo */}
//         <div className="mb-6 flex justify-center md:justify-start">
//           <img src="images\logo.png" alt="Denta Logo" className="h-12" />
//         </div>

//         {/* Quick Links & Address Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold">QUICK LINKS :</h3>
//             <ul className="mt-6 space-y-2">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/about", label: "About Us" },
//                 { path: "/management-team", label: "Management Team" },
//                 { path: "/projects", label: "Project" },
//                 { path: "/investors", label: "Investors" },
//                 { path: "/contact", label: "Contact Us" },
//                 { path: "/privacy-policy", label: "Privacy Policy" },
//                 { path: "/csr", label: "CSR" },
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link to={path} className="hover:text-blue-400 flex items-center">
//                     <span className="mr-2">➤</span> {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Address */}
//           <div>
//             <h3 className="text-lg font-bold">ADDRESS :</h3>
//             <ul className="mt-6 space-y-3">
//               <li className="flex items-center justify-center md:justify-start">
//                 <Phone className="w-5 h-5 mr-2" /> +91-93640 09300 / +91-93640 09301
//               </li>
//               <li className="flex items-center justify-center md:justify-start">
//                 <Mail className="w-5 h-5 mr-2" /> core4engineerspvtltd@gmail.com
//               </li>
//               <li className="flex items-center justify-center md:justify-start">
//                 <MapPin className="w-7 h-9 mr-2" /> No. 12. 1st Floor, Near New Law Court, K-Block, Kuvempunagar, Mysuru - 570 023, KARNATAKA, INDIA
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="container mx-auto flex justify-center md:justify-end space-x-4 mt-8">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Facebook className="w-5 h-5" />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Twitter className="w-5 h-5" />
//         </a>
//         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Youtube className="w-5 h-5" />
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-8 text-sm">
//         © {currentYear}, All Rights Reserved By Denta Water and Infra Solutions Limited
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-14">
      <div className="mx-auto px-6 w-[90%] max-w-none">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* ===== Column 1: Logo + Description (WIDE) ===== */}
          <div className="md:col-span-5">
            <img
              src="/CoreBG.png"
              alt="Core4 Engineers"
              className="h-36 mb-4 object-contain"
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Core4 Engineers Limited is a multidisciplinary engineering organization
              delivering integrated solutions across infrastructure, power, water,
              automation, and project management domains.
            </p>
          </div>

          {/* ===== Column 2: Quick Links ===== */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link to="/projects" className="hover:text-slate-500">
                  Projects
                </Link>
              </li>
             <li>
              <a href="/#about-section" className="hover:text-slate-500">
                About Us
              </a>
            </li>
              <li>
                <Link to="/management-team" className="hover:text-slate-500">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-slate-500">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/#contact-section" className="hover:text-slate-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Column 3: Service Domains ===== */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-2xl mb-4">Service Domains</h3>
            <ul className="space-y-3 text-lg">
              <li>Railway Infra & Electrification</li>
              <li>Water & Wastewater Treatment</li>
              <li>EHV Transmission & Distribution</li>
              <li>HT / LT Distribution Panels</li>
              <li>Automation & SCADA Systems</li>
              <li>PMC (Project Management Consultancy)</li>
            </ul>
          </div>

          {/* ===== Column 4: Legal ===== */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4">Legal</h3>
            <ul className="space-y-3 text-lg">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex justify-center mt-14 space-x-8 text-gray-600">

          <a
            href="https://www.facebook.com/share/17wEb3aogW/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#1877F2]" />
          </a>

          <a
            href="https://www.instagram.com/core4engineersltd?igsh=M3E2cGNocHloenpz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#E4405F]" />
          </a>

          <a
            href="https://x.com/Core4engineers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#1DA1F2]" />
          </a>

          <a
            href="https://www.linkedin.com/company/core4-engineers-pvt-ltd?trk=blended-typeahead"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#0A66C2]" />
          </a>

          <a
            href="https://youtube.com/@core4engineers787?si=4cCbTsuU6Y8qY-3H"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#FF0000]" />
          </a>

        </div>


        {/* ================= COPYRIGHT ================= */}
        <p className="text-center text-gray-600 mt-6 text-lg">
          © 2025 Design by{" "}
          <a
            href="https://www.linqway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-gray-800"
          >
            Linqway
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;

