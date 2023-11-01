import { SWIGGY_FOOD_IMG } from "../utilities/constantLinks";

const CardFood = ({ item }) => {
  return (
    <div className="rounded-2xl w-[331px] hover:shadow">
      <img
        className="h-[220px] w-[330px] rounded-lg"
        src={SWIGGY_FOOD_IMG + item?.info?.cloudinaryImageId}
        alt={item?.info?.name}
      />
      <div className="py-4 flex flex-col gap-2 ps-2">
        <h5 className="text-[18px] font-bold ">{item?.info?.costForTwo}</h5>
        <h5 className="text-[18px] font-semibold ">{item?.info?.name}</h5>
        <div className="font-semibold text-[16px] flex gap-2 flex-row items-center">
          <span className="text-green-500 text-xl">✪</span>
          <span> {item?.info?.avgRating}</span>•
          <span> {item?.info?.sla?.slaString} </span>
        </div>
        <p className="text-gray-500">
          {item?.info?.cuisines.length < 5
            ? item?.info?.cuisines.join(", ") + "."
            : item?.info?.cuisines.slice(0, 5).join(", ") + "..."}
        </p>
      </div>
    </div>
  );
};

// export const withDiscountCardFood = (CardFood) => {
//   return ({ item }) => {
//     return (
//       <section>
//         <label className="text-white bg-amber-600 py-1 px-2 text-[12px] font-semibold  rounded absolute">
//           5% discount!
//         </label>
//         <CardFood item={item} />
//       </section>
//     );
//   };
// };

export default CardFood;
