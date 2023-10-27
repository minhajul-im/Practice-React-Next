import { SWIGGY_MENU_IMG } from "../utils/allLinks";

const Recommend = ({ list }) => {
  return (
    <section>
      {list.map((item) => (
        <div key={item?.card?.info?.id}>
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
    </section>
  );
};

export default Recommend;
