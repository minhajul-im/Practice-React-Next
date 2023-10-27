import ShimmerUi from "./ShimmerUi";
import Food from "../components/Food";
import Search from "../components/Search";
import restaurant from "../utils/restaurant";

const Restaurant = () => {
  const { input, resData, handleOnChange, handleOnClick } = restaurant();

  return (
    <main className="w-5/6 mx-auto">
      <Search
        input={input}
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />

      <h2 className="text-2xl text-gray-700 mb-8 font-bold">
        Restaurants with online food delivery in Kolkata
      </h2>
      {resData.length === 0 ? <ShimmerUi /> : <Food resData={resData} />}
    </main>
  );
};

export default Restaurant;
