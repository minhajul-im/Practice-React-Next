import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center bg-lime-500 gap-6">
      <span>NOTIFICATIONS</span>
      <Link href={"/dashboard"}>go to dashboard</Link>
    </div>
  );
};

export default page;
