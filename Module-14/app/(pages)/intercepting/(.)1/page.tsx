import Link from "next/link";
import React from "react";

const PageInterceptingOne = () => {
  return (
    <div className="p-20 bg-yellow-300">
      <h1>Hello This page is intercepting by Intercepting</h1>
      <Link href={"/intercepting"} className="text-blue-600 underline">
        go to intercepting page
      </Link>
    </div>
  );
};

export default PageInterceptingOne;
