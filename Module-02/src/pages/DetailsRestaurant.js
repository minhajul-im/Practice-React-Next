import detailsFunc from "../utils/details";
import { SWIGGY_MENU_IMG } from "../utils/allLinks";
import FoodDetails from "../components/FoodDetails";
import DetailsShimmer from "../components/DetailsShimmer";

const DetailsRestaurant = () => {
  const { menu, list } = detailsFunc();
  console.log(list);
  console.log(list[0]?.card?.info?.name);

  if (menu === null) {
    return <DetailsShimmer />;
  }

  return (
    <main className="w-4/6 mx-auto">
      <FoodDetails menu={menu} />
      <h2 className="text-2xl font-bold text-gray-700 py-8">Recommend Food!</h2>
      {list.map((item) => (
        <div id={item?.card?.info?.id}>
          <div className="flex justify-between my-4">
            <div>
              <h5 className="text-xl font-semibold">
                {item?.card?.info?.name}
              </h5>
              <h5 className=" font-semibold">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h5>
              <p className="text-[14px] text-gray-400">
                {item?.card?.info?.description}
              </p>
            </div>

            <img
              className="w-[135px] h-[105px] rounded"
              src={SWIGGY_MENU_IMG + list[0]?.card?.info?.imageId}
              alt={list[0]?.card?.info?.name}
            />
          </div>
          <p className="h-[1px] bg-gray-500 underline decoration-dashed my-8"></p>
        </div>
      ))}
    </main>
  );
};

export default DetailsRestaurant;
