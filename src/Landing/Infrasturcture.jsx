// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const InfrastructureComponent = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Text Section */}
//       <div className="text-center md:text-left max-w-4xl mx-auto mb-8" data-aos="fade-up">
//         <h3 className="text-gray-600 font-semibold uppercase">Quality, Efficiency, Progress</h3>
//         <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
//           Elevating Infrastructure, <span className="text-blue-600">Empower Lives</span>
//         </h1>
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Side Image */}
//         <div data-aos="fade-right">
//           <img
//             src="/images/image.png"
//             alt="Infrastructure"
//             className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
//           />
//         </div>

//         {/* Right Side Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
//           {[
//             { icon: "🏠", title: "In-House Excellence", text: "Our self-performance model ensures top-tier quality, backed by a highly skilled workforce." },
//             { icon: "💎", title: "Timely Completion", text: "Ensuring timely completion without compromising on quality and standards throughout." },
//             { icon: "⭐", title: "Diverse Expertise", text: "Our portfolio spans Water Supply, Roads, Railways, Dams, Bridges, and more." },
//             { icon: "🛡", title: "Quality", text: "We aim for superior infrastructure, embracing excellence, efficiency, and ethical values." },
//           ].map((item, index) => (
//             <div key={index} className="p-6 bg-white shadow-md rounded-lg flex flex-col items-start">
//               <span className="text-blue-500 text-2xl">{item.icon}</span>
//               <h3 className="font-bold text-lg mt-3">{item.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfrastructureComponent;




import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfrastructureComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-5xl mx-auto mb-8" data-aos="fade-up">
        <h1 className="text-3xl sm:text-5xl font-bold mt-2 text-gray-900">
          Elevating Infrastructure, <span className="text-blue-600">Empower Lives</span>
        </h1>
        <h3 className="text-2xl text-gray-600 font-semibold uppercase">Quality, Efficiency, Progress</h3>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div data-aos="fade-right" className="flex justify-center md:max-w-md lg:max-w-none mx-auto">
          <img
            src="/images/infra.jpg"
            alt="Infrastructure"
            className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Right Side Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-1 lg:grid-cols-2" data-aos="fade-left">
          {[
            { icon: "🏢", title: "In-Work Excellence", text: "Our self-performance model ensures top-tier quality, backed by a highly skilled workforce." },
            { icon: "⏳", title: "Timely Completion", text: "Ensuring timely completion without compromising on quality and standards throughout." },
            { icon: "🛠️", title: "Diverse Expertise", text: "Our portfolio spans Water Supply, Roads, Railways, Dams, Bridges, and more." },
            { icon: "🛡", title: "Quality", text: "We aim for superior infrastructure, embracing excellence, efficiency, and ethical values." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg flex flex-col items-start md:max-w-md lg:max-w-none mx-auto">
              <span className="text-blue-500 text-2xl">{item.icon}</span>
              <h3 className="font-bold text-xl mt-3">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfrastructureComponent;
