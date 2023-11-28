import likeImg from "../assets/like.svg";
import unlikeImg from "../assets/unlike.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function VideoDescription({ dataOfWatchVideo }) {
  const { id, avatar, title, author, like, unlike, description } =
    dataOfWatchVideo || {};

  return (
    <>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>

      <div className="pb-2 flex items-center space-between justify-between border-b">
        <div className="flex gap-4 items-center">
          <Link to={`/user/${id}`} className="shrink-0">
            <img src={avatar} className="rounded-full h-10 w-10" alt={author} />
          </Link>
          <div>
            <Link
              to={`/user/${id}`}
              className="text-gray-700 text-[16px] font-bold mt-2 hover:text-gray-600"
            >
              {author}
            </Link>
            <p className="font-semibold text-xs text-gray-500">
              1.2M subscribers
            </p>
          </div>
        </div>
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={likeImg} alt="Like" />
            </div>
            <div className="text-sm font-bold leading-[1.7142857] text-slate-600">
              {like > 0 ? like : 2.2}K
            </div>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={unlikeImg} alt="Unlike" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {unlike}
            </div>
          </div>
        </div>
      </div>

      {/* <Description description={description} /> */}
      <DES description={description} />
    </>
  );
}

const DES = ({ description = "" }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDescription = () => {
    setShowDesc(!showDesc);
  };

  let des;
  if (showDesc) {
    des = description;
  } else {
    if (description.split(" ").length > 40) {
      des = description.split(" ").slice(0, 40).join(" ");
    } else {
      des = description;
    }
  }

  const showLess = (
    <h6 className="text-xs font-semibold text-blue-600 block pt-6">
      Show less
    </h6>
  );

  return (
    <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
      {des}
      {description.split(" ").length > 40 && (
        <span
          className="text-blue-600 cursor-pointer"
          onClick={handleShowDescription}
        >
          {showDesc ? showLess : " ...more"}
        </span>
      )}
    </div>
  );
};

const Description = ({ description = "" }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 100;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  let displayDescription;

  if (showFullDescription) {
    displayDescription = description;
  } else {
    if (description.length > maxLength) {
      displayDescription = `${description.slice(0, maxLength)}...`;
    } else {
      displayDescription = description;
    }
  }

  // const displayDescription = showFullDescription
  //   ? description
  //   : description.length > maxLength
  //   ? `${description.slice(0, maxLength)}...`
  //   : description;

  return (
    <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
      <p>{displayDescription}</p>
      {description.length > maxLength && (
        <span
          onClick={toggleDescription}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {showFullDescription ? "Show less" : "Show more"}
        </span>
      )}
    </div>
  );
};
