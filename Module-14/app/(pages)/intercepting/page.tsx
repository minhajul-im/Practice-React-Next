import Link from "next/link";
import React from "react";

const Intercepting = () => {
  return (
    <div className="p-20">
      <h1>Hello Intercepting Page</h1>
      <Link href={"/intercepting/1"} className="text-blue-600 underline">
        go to page 1
      </Link>
    </div>
  );
};

export default Intercepting;
