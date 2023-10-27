import restaurant from "../utils/restaurant";
import { SWIGGY_IMG } from "../utils/allLinks";

const Restaurant = () => {
  const { input, resData, handleOnChange, handleOnClick } = restaurant();

  return (
    <main className="w-5/6 mx-auto">
      <section className="my-8 text-end">
        <input
          value={input}
          onChange={handleOnChange}
          className="outline-none border border-r-0 rounded rounded-r-none border-amber-600 py-1
          px-2 text-amber-700 font-semibold"
          type="text"
        />
        <button
          onClick={handleOnClick}
          className="py-1 px-4 border rounded-l-none border-amber-600 text-white bg-amber-600 
        font-semibold rounded hover:bg-white hover:text-amber-600 duration-75"
        >
          Search
        </button>
      </section>
      <h2 className="text-2xl text-gray-700 mb-8 font-bold">
        Restaurants with online food delivery in Kolkata
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {resData.slice(0, 8).map((item) => (
          <div
            key={item?.info?.id}
            className="rounded-2xl w-[331px] hover:shadow-md"
          >
            <img
              className="h-[220px] w-[330px] rounded-lg"
              src={SWIGGY_IMG + item?.info?.cloudinaryImageId}
              alt="x"
            />
            <div className="py-4 flex flex-col gap-2">
              <h5 className="text-[18px] font-bold ">
                {item?.info?.costForTwo}
              </h5>
              <h5 className="text-[18px] font-semibold ">{item?.info?.name}</h5>
              <div className="font-semibold text-[16px] flex gap-2 flex-row">
                ⭐<span> {item?.info?.avgRating}</span>•
                <span> {item?.info?.sla?.slaString} </span>
              </div>
              <p className="text-gray-500">{item?.info?.cuisines.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Restaurant;
