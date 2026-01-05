import React from "react";

const PostCard = ({ post }) => {
  const { image, title, description, isReversed } = post;

  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm mb-6 sm:mb-8 p-3 sm:p-4">
      {/* Image Section */}
      <div className={`w-full md:w-2/5 ${isReversed ? "md:order-last" : "md:order-first"}`}>
        <img src={`http://localhost:8000/media/${image}`} alt={title} className="w-full h-48 sm:h-64 object-cover rounded-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-3/5 p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-sky-400 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
