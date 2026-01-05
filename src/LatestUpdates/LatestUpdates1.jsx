// import React, { useEffect, useState } from "react";
// import { posts } from "../Data/Posts";
// import PostCard from "./PostCard";

// const LatestUpdates1 = () => {
//   const [selectedPost, setSelectedPost] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-6 sm:space-y-8">
//           {posts.map((post) => (
//             <div key={post.id} onClick={() => setSelectedPost(post)}>
//               <PostCard post={post} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Responsive Modal */}
//       {selectedPost && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//               onClick={() => setSelectedPost(null)}
//             >
//               ✖
//             </button>

//             {/* Image */}
//             {selectedPost.image && (
//               <img
//                 src={selectedPost.image}
//                 alt={selectedPost.title}
//                 className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
//               />
//             )}

//             {/* Title */}
//             <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>

//             {/* Description */}
//             <p className="text-gray-600 text-sm sm:text-base">{selectedPost.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LatestUpdates1;

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const LatestUpdates1 = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data from API
    fetch("http://localhost:8000/api/news/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
        </div>

        {/* Posts Section */}
        <div className="space-y-6 sm:space-y-8">
          {posts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelectedPost(null)}
            >
              ✖
            </button>

            {/* Image */}
            {selectedPost.image && (
              <img
                src={`http://localhost:8000/media/${selectedPost.image}`}
                alt={selectedPost.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
              />
            )}

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base">{selectedPost.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestUpdates1;
