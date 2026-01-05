// import React from "react";
// import Marquee from "react-fast-marquee";
// import { posts } from "../Data/Posts"; // Import posts
// import { useNavigate } from "react-router-dom";

// const MarqueeNews = () => {
//   const navigate = useNavigate();
//   const onClickMarquee = () => {
//     navigate("/investors/latestupdates")
//   }
//   return (
//     <div className="bg-gray-800 text-white py-2">
//       <Marquee speed={50} pauseOnHover={true} gradient={false} gradientWidth={50}>
//         {posts.map((post, index) => (
//           <span key={index} className="mx-4 text-lg text-white" onClick={onClickMarquee}>
//             📰 {post.title} |
//           </span>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default MarqueeNews;

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const MarqueeNews = () => {
  const navigate = useNavigate();
  const [newsPosts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/news/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news posts");
        }
        return response.json();
      })
      .then((data) => {
        setNewsPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  const onClickMarquee = () => {
    navigate("/investors/latestupdates");
  };

  if (loading) return null; // or a loader

  return (
    <div className="bg-gray-800 text-white py-2">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {newsPosts.map((post) => (
          <span
            key={post.id}
            className="mx-4 text-lg text-white cursor-pointer"
            onClick={onClickMarquee}
          >
            📰 {post.title} |
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
