import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DetailsShimmer from "../components/DetailsShimmer";

const DetailsRestaurant = () => {
  const { resId } = useParams();

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await response.json();

    setMenu(jsonData?.data?.cards[0]?.card?.card?.info);
  };

  if (menu === null) {
    return <DetailsShimmer />;
  }

  return (
    <main className="w-4/6 mx-auto">
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
    </main>
  );
};

export default DetailsRestaurant;
