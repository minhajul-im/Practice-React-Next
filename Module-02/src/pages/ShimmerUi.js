import React, { useState } from "react";

const ShimmerUi = () => {
  const [data, _setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
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
