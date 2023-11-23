// import LikeUnlike from "./LikeUnlike";
// import { Link } from "react-router-dom";
// import WatchVideo from "./DescriptionOfVideo";
import DescriptionOfVideo from "./DescriptionOfVideo";

export default function PlayVideo({ video }) {
  // const { author, avatar, title, date, id, description, link, like, unlike } =
  //   video;
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={video?.link}
        title={video?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <DescriptionOfVideo video={video} />

      {/* <>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div className="pb-4 flex items-center space-between justify-between border-b">
          <div className="flex gap-4 items-center">
            <Link to={`/`} className="shrink-0">
              <img
                src={avatar}
                className="rounded-full h-10 w-10"
                alt={author}
              />
            </Link>
            <div>
              <Link
                to={`/`}
                className="text-gray-700 text-[16px] font-bold mt-2 hover:text-gray-600"
              >
                {author}
              </Link>
              <p className="font-semibold text-xs text-gray-500">
                1.2M subscribers
              </p>
            </div>
          </div>
          <LikeUnlike like={like} unlike={unlike} />
        </div>
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </> */}
    </div>
  );
}
