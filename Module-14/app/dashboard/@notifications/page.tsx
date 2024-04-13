import { wait } from "@/utilities/wait";
import React from "react";

const Notifications = async () => {
  await wait(2500);
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center bg-blue-400">
      NOTIFICATIONS
    </div>
  );
};

export default Notifications;
