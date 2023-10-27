import React from "react";

const FoodDetails = ({ menu }) => {
  return (
    <div>
      <div className="flex justify-between mt-16 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 pb-2">
            {menu?.name}
          </h3>
          <p className="text-[14px] text-gray-500 pb-1">
            {menu?.cuisines.join(", ")}
          </p>
          <p className="text-[14px] text-gray-500">
            {menu?.areaName}, {menu?.sla?.lastMileTravelString}
          </p>
        </div>
        <div className="text-[14] text-green-600 font-semibold shadow-md p-4 rounded-md">
          <p className="pb-2">☆ {menu?.avgRating}</p>
          <hr />
          <p className="pt-2">{menu?.totalRatingsString}</p>
        </div>
      </div>
      <p className="text-[16px] text-gray-500">
        {menu?.expectationNotifiers[0]?.enrichedText.replace(/<\/?b>/g, "")}
      </p>
      <p className="h-[1px] bg-gray-500 underline decoration-dashed my-8"></p>
    </div>
  );
};

export default FoodDetails;
