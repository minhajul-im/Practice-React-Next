import { Link } from "react-router-dom";

export default function ChannelDesc({ video }) {
  const { avatar, title, author, id, date, views } = video || {};

  return (
    <div className="flex flex-row mt-2 gap-2">
      <Link to={"/user"} className="shrink-0">
        <img src={avatar} className="rounded-full h-6 w-6" alt={author} />
      </Link>

      <div className="flex flex-col">
        <Link to={`/watch/${id}`}>
          <p className="text-slate-900 text-sm font-semibold">{title}</p>
        </Link>
        <Link
          to={"/user"}
          className="text-gray-400 text-xs mt-2 hover:text-gray-600"
        >
          {author}
        </Link>
        <p className="text-gray-400 text-xs mt-1">
          {views} views . {date}
        </p>
      </div>
    </div>
  );
}
