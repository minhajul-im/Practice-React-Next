import { SWIGGY_FOOD_IMG } from "../../links/constant";

const CartMenu = ({ item }) => {
  return (
    <div className="shadow-lg rounded bg-white">
      <div>
        <h2 className="cartMenuPrice absolute text-xl font-extrabold text-white mt-[190px] ms-4">
          {item?.info?.aggregatedDiscountInfoV3?.header}&#160;
          {item?.info?.aggregatedDiscountInfoV3?.subHeader}
        </h2>
        <img
          className="w-[342px] h-[240px] rounded"
          src={SWIGGY_FOOD_IMG + item?.info?.cloudinaryImageId}
          alt={item?.info?.name}
        />
      </div>
      <div className="py-3 ps-2">
        <h3 className="text-[1.5rem] font-bold py-1">
          {item?.info?.name.length < 25
            ? item?.info?.name
            : item?.info?.name.slice(0, 25).split(" ").slice(0, 4).join(" ") +
              "..."}
        </h3>
        <h5 className="font-bold text-xl">
          <span className="text-green-600">✪</span>&#160;
          {item?.info?.avgRating} • {item?.info?.sla?.slaString}
        </h5>
        <p className="text-gray-500 pt-1">
          {item?.info?.cuisines.length < 4
            ? item?.info?.cuisines.join(", ")
            : item?.info?.cuisines.slice(0, 4).join(", ") + "..."}
        </p>
        <p className="text-gray-500">{item?.info?.areaName}</p>
      </div>
    </div>
  );
};

export default CartMenu;
