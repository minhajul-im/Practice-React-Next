import { Link } from "react-router-dom";

export default function VideoCart({ video }) {
  const { author, avatar, title, duration, views, thumbnail, date, id } =
    video || {};

  return (
    <section className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/watch/${id}`}>
            <img
              src={thumbnail}
              className="w-full h-auto"
              alt="Some video title"
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`/user/${id}`} className="shrink-0">
            <img src={avatar} className="rounded-full h-6 w-6" alt={author} />
          </Link>

          <div className="flex flex-col">
            <Link to={`/watch/${id}`}>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <Link
              to={`/user/${id}`}
              className="text-gray-500 text-xs mt-2 hover:text-gray-600"
            >
              {author}
            </Link>
            <p className="text-gray-500 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
