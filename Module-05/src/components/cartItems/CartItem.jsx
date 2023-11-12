import { SWIGGY_RELATED_FOOD_IMG } from "../../links/constant";

const CartItem = ({ info }) => {
  return (
    <section className="w-6/12 mx-auto ">
      <div className="flex justify-between my-6">
        <div className="w-8/12 my-2">
          <h1 className="text-xl font-bold py-1 text-gray-700">{info?.name}</h1>
          <h3 className="text-[18px] font-semibold py-1 text-gray-700">
            ₹{info?.price / 100 || info?.defaultPrice / 100}
          </h3>
        </div>
        <div className="w-8/12 flex justify-end">
          <img
            className="rounded w-[260px] h-[180px] border"
            src={SWIGGY_RELATED_FOOD_IMG + info?.imageId}
            alt={info?.name}
          />
        </div>
      </div>
      <hr className="border-b border-gray-200" />
    </section>
  );
};

export default CartItem;
