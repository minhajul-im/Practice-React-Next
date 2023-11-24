import { useState } from "react";
import { Link } from "react-router-dom";
import PlayVideo from "./PlayVideo";

export default function RelatedVideoThumbnail({ video }) {
  const { watch, setWatch } = useState(null);
  const { id, title, thumbnail, duration, link } = video || {};

  const handleWatchClick = () => {
    setWatch(<PlayVideo video={video} />);
  };

  return (
    <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
      <Link onClick={handleWatchClick} to={`/watch/${id}`}>
        {watch} <img src={thumbnail} className="object-cover" alt={title} />
      </Link>
      <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
        {duration}
      </p>
    </div>
  );
}
