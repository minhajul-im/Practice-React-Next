import FoodDetailsShimmerUi from "./FoodDetailsShimmerUi";
import { SWIGGY_RECOMMEND_FOOD } from "../utilities/constantLinks";

const FoodRecommend = ({ lists }) => {
  if (lists === null) {
    return <FoodDetailsShimmerUi />;
  }

  const offer = lists[0]?.card?.info?.offerTags[0]?.title;

  return (
    <section>
      {lists.map((list) => (
        <div key={list?.card?.info?.id}>
          <div className="flex justify-between my-4 px-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-600">
                {list?.card?.info?.name}
              </h5>
              <div className="flex gap-4 items-center">
                <h5 className=" font-semibold py-2">
                  ₹
                  {list?.card?.info?.price / 100 ||
                    list?.card?.info?.defaultPrice / 100}
                </h5>
                <span className="text-red-100 bg-pink-400 p-1 text-[10px] font-semibold rounded px-3">
                  {/* {list?.card?.info?.offerTags[0]?.title} */}
                  {offer}
                </span>
              </div>

              <p className="text-[14px] text-gray-400 pt-4">
                {list?.card?.info?.description}
              </p>
            </div>

            <img
              className="w-[135px] h-[105px] rounded"
              src={SWIGGY_RECOMMEND_FOOD + list?.card?.info?.imageId}
              alt={list?.card?.info?.name}
            />
          </div>
          <p className="h-[1px] bg-gray-300 underline decoration-dashed my-8"></p>
        </div>
      ))}
    </section>
  );
};

export default FoodRecommend;
