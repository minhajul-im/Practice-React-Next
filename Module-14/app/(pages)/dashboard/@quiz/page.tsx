import { wait } from "@/utilities/wait";
import React from "react";

const Quiz = async () => {
  await wait(3500);
  return (
    <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center bg-amber-400">
      QUIZ
    </div>
  );
};

export default Quiz;
