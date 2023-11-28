import { Link } from "react-router-dom";
import ChannelDes from "./ChannelDes";

export default function VideoCart({ video }) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/watch/${video?.id}`}>
            <img
              src={video?.thumbnail}
              className="w-full h-auto"
              alt="Some video title"
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {video?.duration}
          </p>
        </div>

        <ChannelDes video={video} />
      </div>
    </div>
  );
}
