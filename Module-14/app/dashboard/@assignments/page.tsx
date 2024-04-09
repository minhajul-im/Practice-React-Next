import { wait } from "@/utilities/wait";
import React from "react";

const Assignments = async () => {
  await wait(1500);
  return (
    <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center bg-purple-400">
      ASSIGNMENTS
    </div>
  );
};

export default Assignments;
