import React from "react";
import { Link } from "react-router-dom";

export default function RelatedVideoDes({ video }) {
  const { id, title, link, views, date, author } = video || {};
  return (
    <div className="flex flex-col w-full">
      <Link to={`/watch/${id}`}>
        <p className="text-slate-900 text-sm font-semibold">{title}</p>
      </Link>
      <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
        {author}
      </a>
      <p className="text-gray-400 text-xs mt-1">
        {views} views . {date}
      </p>
    </div>
  );
}
