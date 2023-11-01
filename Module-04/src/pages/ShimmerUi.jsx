import { useState } from "react";

const ShimmerUi = () => {
  const [data] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {data.map((item) => (
        <div
          key={item}
          className="rounded-2xl w-[331px] h-[378px] hover:shadow-md bg-gray-200"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUi;
