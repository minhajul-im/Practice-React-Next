import Link from "next/link";
import React from "react";

const PageOne = () => {
  return (
    <div className="p-20 bg-purple-600">
      <h1>Hello This page is no intercepting by Intercepting</h1>
      <h2>
        this the default behavior this page like (it render by server like this)
      </h2>
      <Link href={"/intercepting"} className="text-blue-600 underline">
        go to intercepting page
      </Link>
      <Link href={"/about"} className="text-blue-600 underline">
        go to intercepting page
      </Link>
    </div>
  );
};

export default PageOne;
