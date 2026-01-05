// import React from "react";
// import {  MapPin, Phone, Mail } from "lucide-react";
// const ContactSection = () => {
//   return (
//     <section className="px-6 md:px-16 py-12 relative">
//       {/* Top Blue Banner */}
//       <div className="bg-blue-900 text-white px-6 py-8 rounded-lg">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-lg font-bold uppercase">Why Choose Us</h3>
//           <h2 className="text-3xl sm:text-4xl font-bold mt-2">
//             Raising Infrastructure to <br />
//             <span className="text-blue-300">Enhance and Enrich</span>
//           </h2>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 text-black p-8 rounded-lg mt-8 shadow-lg">
//         {/* Left Content */}
//         <div>
//           <h3 className="text-xl font-bold text-blue-700">Core Values :</h3>
//           <p className="mt-2 text-gray-600">
//             At Denta, our core values are the guiding principles that shape our corporate culture. These values include integrity, excellence, safety, sustainability, and community engagement.
//           </p>
//           <p className="text-gray-600 mt-2">
//             They underscore every facet of our operations, promoting a culture of professionalism and ethical conduct.
//           </p>

          
//           {/* Contact Info */}
//           <div className="mt-7">
//             <h3 className="text-lg font-bold text-blue-700">ADDRESS :</h3>
//             <ul className="mt-6 space-y-3 text-gray-600">
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

//         {/* Contact Form - Positioned Responsively */}
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-96 mx-auto">
//           <h3 className="text-xl font-bold text-gray-900">Connect with Us</h3>
//           <p className="text-gray-600 mt-2">Stay connected and join our infrastructure empowerment journey.</p>
//           <form className="mt-4">
//             <input type="text" placeholder="Name" className="border p-2 w-full mb-3 rounded" required />
//             <input type="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" required />
//             <input type="tel" placeholder="Mobile No" className="border p-2 w-full mb-3 rounded" required />
//             <textarea placeholder="Message" className="border p-2 w-full mb-3 rounded" required></textarea>
//             <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;




import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 relative">
      {/* Top Blue Banner */}
      <div className="bg-blue-900 text-white px-6 py-8 rounded-lg text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold uppercase">Why Choose Us</h3>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
            Raising Infrastructure to <br />
            <span className="text-blue-300">Enhance and Enrich</span>
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 text-black p-6 sm:p-8 rounded-lg mt-8 shadow-lg">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700">Core Values :</h3>
          <p className="text-lg mt-2 text-gray-600">
            At <b>CORE4 ENGINEERS LTD</b>, our core values are the guiding principles that shape our corporate culture. These values include integrity, excellence, safety, sustainability, and community engagement.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            They underscore every facet of our operations, promoting a culture of professionalism and ethical conduct.
          </p>

          {/* Contact Info */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-blue-700">Address :</h3>
            <ul className="text-lg mt-4 space-y-3 text-gray-600">
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="w-5 h-5 mr-2" /> +91 08214 507882 / +91 73492 80036
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="w-5 h-5 mr-2" /> info@core4grp.com
              </li>
              
            </ul>
          </div>
          {/* Additional Address Details */}

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-700">We are placed at :</h3>

            <ul className="list-disc ml-6 mt-3 space-y-4">
              <li>
                <h4 className="text-xl font-bold text-black-700">
                  Head / Registered Office (Kuvempunagar, Mysore)
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  No. 12, 1st Floor, Near Ramana Maharshi Gyna Kendra  
                  (Near New Law Court), K-Block, Kuvempunagar, Mysore - 570023.
                </p>
              </li>

              {/* <li>
                <h4 className="text-xl font-bold text-black-700">
                  Branch Office – Rajajinagar, Bengaluru
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  392, 57th Cross Rd, 1st Block, 3rd Block, Rajajinagar,  
                  Bengaluru, Karnataka 560010
                </p>
              </li> */}

              <li>
                <h4 className="text-xl font-bold text-black-700">
                  Factory / Manufacturing Unit (Hootagalli Industrial Area, Mysore)
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  Plot No. 77-N, Hootagalli Industrial Area, Koorgalli, Mysore - 570018.
                </p>
              </li>

              {/* <li>
                <h4 className="text-xl font-bold text-black-700">
                  Branch Office — Madurai (Tamil Nadu)
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  #7/103 Rajendraprasad, 3rd Cross Street, Nagamalai 
                  Pudupudukkottai, Madurai — 625019
                </p>
              </li> */}

              {/* <li>
                <h4 className="text-xl font-bold text-black-700">
                  Branch Office – Odisha 
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  BSNL Backside, Ramchandrapur Bazaar, Jethani, Odisha – 752050.
                </p>
              </li> */}

            </ul>
          </div>
        </div>
      
        {/* Contact Form - Responsive Positioning */}
        <div className="flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:max-w-md mx-auto ">
            <h3 className="text-2xl font-bold text-gray-900 ">Connect with Us</h3>
            <p className="text-xl text-gray-600 mt-2">Stay connected and join our infrastructure empowerment journey.</p>
            <form className="text-lg mt-4">
              <input type="text" placeholder="Name" className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" placeholder="Email" className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="tel" placeholder="Mobile No" className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <textarea placeholder="Message" className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              <button type="submit" className="text-xl bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
