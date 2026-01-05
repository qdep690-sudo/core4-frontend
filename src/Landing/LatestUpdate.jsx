// import { useEffect, useState } from "react";
// import { Bell } from "lucide-react";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { posts } from "../Data/Posts";
// import { useNavigate } from "react-router-dom";

// const LatestUpdates = () => {
//   const navigate = useNavigate();
//   const [visiblePost, setVisiblePost] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false, mirror: true });

//     // Updates blinking effect one by one
//     const postInterval = setInterval(() => {
//       setVisiblePost((prev) => (prev + 1) % posts.length);
//     }, 3500); // Slow blinking effect every 3.5 seconds

//     return () => clearInterval(postInterval);
//   }, []);

//   const onClickUpdates = () => {
//     navigate("/investors/latestupdates");
//   };

//   return (
//     <div
//       className="w-full min-h-[50vh] flex flex-col justify-center items-center text-black shadow-lg border border-gray-200 p-6 bg-[#81BFDA]
//       sm:p-8 md:p-10 lg:p-12 xl:p-14" // Responsive Padding
//       data-aos="fade-up" // AOS for Whole Component
//     >
//       {/* Static Header */}
//       <h2
//         className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center text-black"
//       >
//         Latest Updates
//       </h2>

//       <p className="text-black mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-in">
//         Stay updated with the latest news and announcements.
//       </p>

//       {/* Updates List */}
//       <ul className="space-y-4 text-sm sm:text-lg md:text-xl lg:text-xl">
//         {posts.map((post, index) => (
//           <motion.li
//             key={index}
//             className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white"
//             animate={{ opacity: visiblePost === index ? [0, 1, 0] : 1 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           >
//             {/* Bell Icon */}
//             <div className="text-black">
//               <Bell size={24} />
//             </div>
//             <span>{post.title}</span>
//           </motion.li>
//         ))}
//       </ul>

//       {/* Button */}
//       <motion.button
//         className="mt-6 px-4 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base md:text-lg lg:text-xl"
//         onClick={onClickUpdates}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         data-aos="zoom-in"
//       >
//         View More
//       </motion.button>
//     </div>
//   );
// };

// export default LatestUpdates;


import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const navigate = useNavigate();
  const [visiblePost, setVisiblePost] = useState(0);
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    fetch("http://localhost:8000/api/news/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        return res.json();
      })
      .then((data) => setNewsPosts(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePost((prev) => (prev + 1) % newsPosts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [newsPosts]);

  const onClickUpdates = () => {
    navigate("/investors/latestupdates");
  };

  return (
    <div
      className="w-full min-h-[50vh] flex flex-col justify-center items-center text-black shadow-lg border border-gray-200 p-6 bg-[#81BFDA]
      sm:p-8 md:p-10 lg:p-12 xl:p-14"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center text-black">
        Latest Updates
      </h2>

      <p className="text-black mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-in">
        Stay updated with the latest news and announcements.
      </p>

      <ul className="space-y-4 text-sm sm:text-lg md:text-xl lg:text-xl">
        {newsPosts.map((post, index) => (
          <motion.li
            key={post.id}
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white"
            animate={{ opacity: visiblePost === index ? [0, 1, 0] : 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="text-black">
              <Bell size={24} />
            </div>
            <span>{post.title}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        className="mt-6 px-4 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base md:text-lg lg:text-xl"
        onClick={onClickUpdates}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-aos="zoom-in"
      >
        View More
      </motion.button>
    </div>
  );
};

export default LatestUpdates;
