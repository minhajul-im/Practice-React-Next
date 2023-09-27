"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Search = () => {
  const { slug } = useParams();

  return (
    <div className="flex h-screen justify-center items-center flex-col gap-4">
      <p className="text-white font-sans font-bold text-3xl bg-red-600 py-4 px-8 rounded">
        {slug}
      </p>
      <Link
        href={"/"}
        className="text-blue-500 underline text-center font-semibold font-serif"
      >
        back to home
      </Link>
    </div>
  );
};

export default Search;
