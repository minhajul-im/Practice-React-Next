import React from "react";
import LikeUnlike from "./LikeUnlike";

export default function PlayVideo() {
  return (
    <div class="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        class="aspect-video"
        src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
        title="Some video title"
        frameborder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <>
        <h1 class="text-lg font-semibold tracking-tight text-slate-800">
          Some video title
        </h1>
        <div class="pb-4 flex items-center space-between border-b">
          <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on 23 Nov 2022
          </h2>

          <LikeUnlike />
        </div>

        <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">
          Some video description here
        </div>
      </>
    </div>
  );
}
