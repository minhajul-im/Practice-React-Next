"use client";

import { useState } from "react";

type Data = {
  width: number;
  height: number;
  bgColor: string;
};

export default function AppPage() {
  const [size, setSize] = useState<Data[]>([
    {
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: "black",
    },
  ]);

  const horizontalDivided = (horizontal: Data) => {
    const newSize = [
      ...size,
      {
        width: horizontal.width,
        height: horizontal.height / 2,
        bgColor: horizontal.bgColor === "black" ? "blue" : "black", // Alternating colors
      },
      {
        width: horizontal.width,
        height: horizontal.height / 2,
        bgColor: horizontal.bgColor === "black" ? "blue" : "black", // Alternating colors
      },
    ];
    setSize(newSize);
  };

  const verticalDivided = (vertical: Data) => {
    const newSize = [
      ...size,
      {
        width: vertical.width / 2,
        height: vertical.height,
        bgColor: vertical.bgColor === "black" ? "red" : "black", // Alternating colors
      },
      {
        width: vertical.width / 2,
        height: vertical.height,
        bgColor: vertical.bgColor === "black" ? "red" : "black", // Alternating colors
      },
    ];
    setSize(newSize);
  };

  return (
    <div className="w-full h-screen text-white">
      {size.map((item, idx) => (
        <div
          key={idx}
          className="relative"
          style={{
            width: item.width,
            height: item.height,
            backgroundColor: item.bgColor, // Dynamic background color
          }}>
          <button
            onClick={() => verticalDivided(item)} // Pass the current item
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 text-neutral-700 py-1 px-2 rounded">
            Vertical
          </button>
          <button
            onClick={() => horizontalDivided(item)} // Pass the current item
            className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 text-neutral-700 py-1 px-2 rounded">
            Horizontal
          </button>
        </div>
      ))}
    </div>
  );
}
