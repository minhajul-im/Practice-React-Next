import React from "react";

export default function RelatedVideo() {
  return (
    <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
      <a href="video.html">
        <img
          src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
          className="object-cover"
          alt="Some video title"
        />
      </a>
      <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
        12:10
      </p>
    </div>
  );
}
