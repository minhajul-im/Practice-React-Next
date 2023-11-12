import { SWIGGY_RELATED_FOOD_IMG } from "../../links/constant";

const RelatedFoodItem = ({ items }) => {
  return (
    <section className="mx-6">
      {items?.card?.card?.itemCards.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="flex justify-between my-6">
            <div className="w-9/12 my-2">
              <h1 className="text-xl font-bold py-1 text-gray-700">
                {item?.card?.info?.name}
              </h1>
              <h3 className="text-[18px] font-semibold py-1 text-gray-700">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h3>
              <p className="text-gray-500 mt-4">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 flex justify-end">
              <div>
                <button className="py-1 px-4 text-white bg-amber-600 font-semibold rounded  duration-75 absolute mt-24 ms-11">
                  Add+
                </button>
                <img
                  className="rounded w-[160px] h-[120px] border"
                  src={SWIGGY_RELATED_FOOD_IMG + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
              </div>
            </div>
          </div>
          <hr className="border-b border-gray-200" />
        </div>
      ))}
    </section>
  );
};

export default RelatedFoodItem;
