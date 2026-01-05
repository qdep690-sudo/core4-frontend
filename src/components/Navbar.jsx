

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
//   const location = useLocation();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest("#investors-dropdown")) {
//         setDropdownOpen(false);
//       }
//       if (!event.target.closest("#solutions-dropdown")) {
//         setSolutionsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isOpen]);

//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       {/* Logo */}
//       <img src="images/logo.png" alt="Logo" className="h-14 w-auto ml-5" />

//       {/* Desktop Navbar */}
//       <ul className="hidden lg:flex space-x-9 text-lg items-center">
//         {[
//           { path: "/", label: "Home" },
//           { path: "/about", label: "About Us" },
//           { path: "/management-team", label: "Management Team" },
//           { path: "/gallery", label: "Gallery" },
//           { path: "/csr", label: "CSR" },
//         ].map(({ path, label }) => (
//           <li key={path}>
//             <Link
//               to={path}
//               className={`hover:text-blue-500 ${
//                 location.pathname === path ? "text-blue-500" : "text-black"
//               }`}
//             >
//               {label}
//             </Link>
//           </li>
//         ))}

//         {/* Solutions Dropdown */}
//         <li className="relative" id="solutions-dropdown">
//           <button
//             className="flex items-center hover:text-blue-500"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSolutionsDropdownOpen(!solutionsDropdownOpen);
//             }}
//           >
//             Solutions <ChevronDown size={18} className={`ml-1 transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>

//           {solutionsDropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               {[
//                 { path: "/solutions/projects", label: "Projects" },
//                 { path: "/solutions/services", label: "Services" },
//                 { path: "/solutions/products", label: "Products" },
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link
//                     to={path}
//                     className="block px-4 py-2 hover:bg-gray-100 text-black"
//                     onClick={() => setSolutionsDropdownOpen(false)}
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>

//         {/* Investors Dropdown */}
//         <li className="relative" id="investors-dropdown">
//           <button
//             className="flex items-center hover:text-blue-500"
//             onClick={(e) => {
//               e.stopPropagation();
//               setDropdownOpen(!dropdownOpen);
//             }}
//           >
//             Investors <ChevronDown size={18} className={`ml-1 transition ${dropdownOpen ? "rotate-180" : ""}`} />
//           </button>

//           {dropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               {[
//                 { path: "/investors/polices", label: "Polices" },
//                 { path: "/investors/latestupdates", label: "Latest Updates" },
//                 { path: "/investors/IPO", label: "IPO" },
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link
//                     to={path}
//                     className="block px-4 py-2 hover:bg-gray-100 text-black"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>

//         {/* Contact Us Button */}
//         <li>
//           <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">
//             Contact Us
//           </Link>
//         </li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Navbar */}
//       <ul
//         className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:hidden flex flex-col items-start text-lg overflow-y-auto`}
//       >
//         {/* Close Button & Logo */}
//         <div className="flex justify-between items-center w-full px-6 py-4 border-b">
//           <img src="images/logo.png" alt="Logo" className="h-14 w-auto" />
//           <button onClick={() => setIsOpen(false)} className="p-2">
//             <X size={28} />
//           </button>
//         </div>

//         {/* Mobile Nav Links */}
//         {[
//           { path: "/", label: "Home" },
//           { path: "/about", label: "About Us" },
//           { path: "/management-team", label: "Management Team" },
//           { path: "/gallery", label: "Gallery" },
//           { path: "/csr", label: "CSR" },
//         ].map(({ path, label }) => (
//           <li key={path} className="w-full">
//             <Link
//               to={path}
//               className={`block px-6 py-4 font-medium ${
//                 location.pathname === path ? "text-blue-500" : "text-black"
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               {label}
//             </Link>
//           </li>
//         ))}

//         {/* Mobile Solutions Dropdown */}
//         <li className="w-full">
//           <button
//             className="flex justify-between px-6 py-4 font-medium w-full text-left"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSolutionsDropdownOpen(!solutionsDropdownOpen);
//             }}
//           >
//             Solutions <ChevronDown size={18} className={`transform transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>

//           {solutionsDropdownOpen && (
//             <ul className="bg-gray-100">
//               {[
//                 { path: "/solutions/projects", label: "Projects" },
//                 { path: "/solutions/services", label: "Services" },
//                 { path: "/solutions/products", label: "Products" }
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link
//                     to={path}
//                     className="block px-8 py-3 text-black hover:bg-gray-200"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setSolutionsDropdownOpen(false);
//                     }}
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//         {/* Mobile Investers Dropdown */}
//         <li className="w-full">
//           <button
//             className="flex justify-between px-6 py-4 font-medium w-full text-left"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSolutionsDropdownOpen(!solutionsDropdownOpen);
//             }}
//           >
//             Investers <ChevronDown size={18} className={`transform transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>

//           {solutionsDropdownOpen && (
//             <ul className="bg-gray-100">
//               {[
//                 { path: "/investors/polices", label: "Polices" },
//                 { path: "/investors/latestupdates", label: "Latest Updates" },
//                 { path: "/investors/IPO", label: "IPO" },
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link
//                     to={path}
//                     className="block px-8 py-3 text-black hover:bg-gray-200"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setSolutionsDropdownOpen(false);
//                     }}
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Scroll functions
//   const handleScroll = (e, sectionId) => {
//     e.preventDefault();
//     if (location.pathname === "/") {
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//     setIsOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest("#investors-dropdown")) setDropdownOpen(false);
//       if (!event.target.closest("#solutions-dropdown")) setSolutionsDropdownOpen(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       {/* Logo */}
//       <img src="images/logo.png" alt="Logo" className="h-14 w-auto ml-5" />

//       {/* Desktop Navbar */}
//       <ul className="hidden lg:flex space-x-9 text-lg items-center">
//         <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
//         <li><a href="/" onClick={(e) => handleScroll(e, "about-section")} className="hover:text-blue-500">About Us</a></li>
//         <li><Link to="/management-team" className="hover:text-blue-500">Management Team</Link></li>
//         <li><Link to="/gallery" className="hover:text-blue-500">Gallery</Link></li>
//         <li><Link to="/csr" className="hover:text-blue-500">CSR</Link></li>

//         {/* Investors Dropdown */}
//         <li className="relative" id="investors-dropdown">
//           <button className="flex items-center hover:text-blue-500" onClick={(e) => { 
//             e.stopPropagation(); 
//             setDropdownOpen(!dropdownOpen);
//           }}>
//             Investors <ChevronDown size={18} className={`ml-1 transition ${dropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {dropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               <li><Link to="/investors/financials" className="block px-4 py-2 hover:bg-gray-100">Financials</Link></li>
//               <li><Link to="/investors/reports" className="block px-4 py-2 hover:bg-gray-100">Reports</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Solutions Dropdown */}
//         <li className="relative" id="solutions-dropdown">
//           <button className="flex items-center hover:text-blue-500" onClick={(e) => { 
//             e.stopPropagation(); 
//             setSolutionsDropdownOpen(!solutionsDropdownOpen);
//           }}>
//             Solutions <ChevronDown size={18} className={`ml-1 transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {solutionsDropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               <li><Link to="/solutions/projects" className="block px-4 py-2 hover:bg-gray-100">Projects</Link></li>
//               <li><Link to="/solutions/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link></li>
//               <li><Link to="/solutions/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Contact Us Button */}
//         <li><a href="/" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={(e) => handleScroll(e, "contact-section")}>Contact Us</a></li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Navbar */}
//       <ul className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col items-start text-lg overflow-y-auto`}>
//         {/* Close Button & Logo */}
//         <div className="flex justify-between items-center w-full px-6 py-4 border-b">
//           <img src="images/logo.png" alt="Logo" className="h-14 w-auto" />
//           <button onClick={() => setIsOpen(false)} className="p-2"><X size={28} /></button>
//         </div>

//         {/* Mobile Nav Links */}
//         <li><Link to="/" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Home</Link></li>
//         <li><a href="/" className="block px-6 py-4 font-medium" onClick={(e) => handleScroll(e, "about-section")}>About Us</a></li>
//         <li><Link to="/management-team" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Management Team</Link></li>
//         <li><Link to="/gallery" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Gallery</Link></li>
//         <li><Link to="/csr" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>CSR</Link></li>

//         {/* Mobile Investors Dropdown */}
//         <li>
//           <button className="flex justify-between px-6 py-4 font-medium w-full" onClick={() => setDropdownOpen(!dropdownOpen)}>
//             Investors <ChevronDown size={18} className={`transition ${dropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {dropdownOpen && (
//             <ul className="bg-gray-100">
//               <li><Link to="/investors/financials" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Financials</Link></li>
//               <li><Link to="/investors/reports" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Reports</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Mobile Solutions Dropdown */}
//         <li>
//           <button className="flex justify-between px-6 py-4 font-medium w-full" onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}>
//             Solutions <ChevronDown size={18} className={`transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {solutionsDropdownOpen && (
//             <ul className="bg-gray-100">
//               <li><Link to="/solutions/projects" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Projects</Link></li>
//               <li><Link to="/solutions/services" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Services</Link></li>
//               <li><Link to="/solutions/products" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Products</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Contact Us Button in Mobile */}
//         <li><a href="/" className="block bg-blue-600 text-white px-6 py-4 font-medium" onClick={(e) => handleScroll(e, "contact-section")}>Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // New state for mobile Investors dropdown
//   const [mobileSolutionsDropdownOpen, setMobileSolutionsDropdownOpen] = useState(false); // New state for mobile Solutions dropdown
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Scroll functions
//   const handleScroll = (e, sectionId) => {
//     e.preventDefault();
//     if (location.pathname === "/") {
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//     setIsOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest("#investors-dropdown")) setDropdownOpen(false);
//       if (!event.target.closest("#solutions-dropdown")) setSolutionsDropdownOpen(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       {/* Logo */}
//       <img src="images/logo.png" alt="Logo" className="h-14 w-auto ml-5" />

//       {/* Desktop Navbar */}
//       <ul className="hidden lg:flex space-x-9 text-lg items-center">
//         <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
//         <li><a href="/" onClick={(e) => handleScroll(e, "about-section")} className="hover:text-blue-500">About Us</a></li>
//         <li><Link to="/management-team" className="hover:text-blue-500">Management Team</Link></li>
//         <li><Link to="/gallery" className="hover:text-blue-500">Gallery</Link></li>
//         <li><Link to="/csr" className="hover:text-blue-500">CSR</Link></li>

//         {/* Investors Dropdown */}
//         <li className="relative" id="investors-dropdown">
//           <button className="flex items-center hover:text-blue-500" onClick={(e) => { 
//             e.stopPropagation(); 
//             setDropdownOpen(!dropdownOpen);
//           }}>
//             Investors <ChevronDown size={18} className={`ml-1 transition ${dropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {dropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               <li><Link to="/investors/financials" className="block px-4 py-2 hover:bg-gray-100">Financials</Link></li>
//               <li><Link to="/investors/reports" className="block px-4 py-2 hover:bg-gray-100">Reports</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Solutions Dropdown */}
//         <li className="relative" id="solutions-dropdown">
//           <button className="flex items-center hover:text-blue-500" onClick={(e) => { 
//             e.stopPropagation(); 
//             setSolutionsDropdownOpen(!solutionsDropdownOpen);
//           }}>
//             Solutions <ChevronDown size={18} className={`ml-1 transition ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {solutionsDropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//               <li><Link to="/solutions/projects" className="block px-4 py-2 hover:bg-gray-100">Projects</Link></li>
//               <li><Link to="/solutions/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link></li>
//               <li><Link to="/solutions/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Contact Us Button */}
//         <li><a href="/" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={(e) => handleScroll(e, "contact-section")}>Contact Us</a></li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Navbar */}
//       <ul className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col items-start text-lg overflow-y-auto`}>
//         {/* Close Button & Logo */}
//         <div className="flex justify-between items-center w-full px-6 py-4 border-b">
//           <img src="images/logo.png" alt="Logo" className="h-14 w-auto" />
//           <button onClick={() => setIsOpen(false)} className="p-2"><X size={28} /></button>
//         </div>

//         {/* Mobile Nav Links */}
//         <li><Link to="/" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Home</Link></li>
//         <li><a href="/" className="block px-6 py-4 font-medium" onClick={(e) => handleScroll(e, "about-section")}>About Us</a></li>
//         <li><Link to="/management-team" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Management Team</Link></li>
//         <li><Link to="/gallery" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Gallery</Link></li>
//         <li><Link to="/csr" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>CSR</Link></li>

//         {/* Mobile Investors Dropdown */}
//         <li>
//           <button className="flex justify-between px-6 py-4 font-medium w-full" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
//             Investors <ChevronDown size={18} className={`transition ${mobileDropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {mobileDropdownOpen && (
//             <ul className="bg-gray-100">
//               <li><Link to="/investors/financials" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Financials</Link></li>
//               <li><Link to="/investors/reports" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Reports</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Mobile Solutions Dropdown */}
//         <li>
//           <button className="flex justify-between px-6 py-4 font-medium w-full" onClick={() => setMobileSolutionsDropdownOpen(!mobileSolutionsDropdownOpen)}>
//             Solutions <ChevronDown size={18} className={`transition ${mobileSolutionsDropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {mobileSolutionsDropdownOpen && (
//             <ul className="bg-gray-100">
//               <li><Link to="/solutions/projects" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Projects</Link></li>
//               <li><Link to="/solutions/services" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Services</Link></li>
//               <li><Link to="/solutions/products" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Products</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* Contact Us Button in Mobile */}
//         <li><a href="/" className="block bg-blue-600 text-white px-6 py-4 font-medium" onClick={(e) => handleScroll(e, "contact-section")}>Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // New state for mobile Investors dropdown
  const [mobileSolutionsDropdownOpen, setMobileSolutionsDropdownOpen] = useState(false); // New state for mobile Solutions dropdown
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll functions
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  // Handle external link
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#investors-dropdown")) setDropdownOpen(false);
      if (!event.target.closest("#about-dropdown")) setAboutDropdownOpen(false);
      if (!event.target.closest("#solutions-dropdown")) setSolutionsDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md p-2 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/"><img src="/images/logo.jpg" alt="Logo" className="h-20 w-42 ml-5" /></Link>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex space-x-12 text-xl items-center">
      <li>
        <Link
          to="/"
          className="px-3 py-2 rounded border border-transparent hover:border-blue-900 hover:text-blue-900 transition"
        >
          Home
        </Link>
      </li>

      <li>
        <a
          href="/#about-section"
          className="px-3 py-2 rounded hover:text-blue-900 hover:border hover:border-blue-900 transition"
        >
          About Us
        </a>
      </li>

        <li>
          <Link
            to="/projects"
            className="px-3 py-2 rounded hover:text-blue-900 hover:border hover:border-blue-900 transition"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            className="px-3 py-2 rounded hover:text-blue-900 hover:border hover:border-blue-900 transition"
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="px-3 py-2 rounded hover:text-blue-900 hover:border hover:border-blue-900 transition"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/investors"
            className="px-3 py-2 rounded hover:text-blue-900 hover:border hover:border-blue-900 transition"
          >
            Investors Info
          </Link>
        </li>
                <li>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
          >
            CORE4 ENERGY
          </a>
        </li>

        {/* Contact Us Button */}
      <li>
        <a
          href="/#contact-section"
          className="border border-blue-900 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Contact Us
        </a>
      </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navbar */}
      <ul
        className={`fixed top-0 w-full h-screen bg-white z-50
        transition-all duration-300
        ${isOpen ? "left-0" : "-left-full"}
        lg:hidden flex flex-col items-start text-lg overflow-y-auto`}
      >
        {/* Close Button & Logo */}
        <div className="flex justify-between items-center w-full px-6 py-4 border-b">
          <img src="images/logo.jpg" alt="Logo" className="h-14 w-auto" />
          <button onClick={() => setIsOpen(false)} className="p-2"><X size={28} /></button>
        </div>

        {/* Mobile Nav Links */}
        <li><Link to="/" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><a href="about-section" className="block px-6 py-4 font-medium" onClick={(e) => handleScroll(e, "about-section")}>About Us</a></li>
        <li><Link to="/projects" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/services" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/products" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li><Link to="/investors" className="block px-6 py-4 font-medium" onClick={() => setIsOpen(false)}>Investors Info</Link></li>
        <li className="px-6 py-4 w-full">
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
          >
            CORE4 ENERGY
          </a>
        </li>

        <li className="px-6 py-4 w-full">
          <a
            href="/#contact-section"
            onClick={() => setIsOpen(false)}
            className="inline-block border border-blue-900 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Contact Us
          </a>
        </li>



        {/* Mobile Investors Dropdown */}
        {/* <li>
          <button className="flex justify-between px-6 py-4 font-medium w-full" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
            Investors <ChevronDown size={18} className={`transition ${mobileDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdownOpen && (
            <ul className="bg-gray-100">
              <li><Link to="/investors/polices" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Policies</Link></li>
              <li><Link to="/investors/latestupdates" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Latest Updates</Link></li>
              <li><Link to="/investors/IPO" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>IPO</Link></li>
              <li><Link to="/investors/csr" className="block px-8 py-3 hover:bg-gray-200" onClick={() => setIsOpen(false)}>CSR</Link></li>
            </ul>
          )}
        </li> */}

        {/* Contact Us Button in Mobile */}
      </ul>
    </nav>
  );
};

export default Navbar;
