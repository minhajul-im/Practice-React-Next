import React from "react";

export default function () {
  return (
    <div className="flex flex-col w-full">
      <a href="#">
        <p className="text-slate-900 text-sm font-semibold">Some video title</p>
      </a>
      <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
        Learn with Sumit
      </a>
      <p className="text-gray-400 text-xs mt-1">100K views . 23 Oct 2022</p>
    </div>
  );
}
