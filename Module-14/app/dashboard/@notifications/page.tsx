import { wait } from "@/utilities/wait";
import Link from "next/link";
import React from "react";

const Notifications = async () => {
  await wait(500);
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center bg-blue-400 gap-6">
      <span>NOTIFICATIONS</span>
      <Link href={"/dashboard/sub-link"}>go to sub-link</Link>
    </div>
  );
};

export default Notifications;
