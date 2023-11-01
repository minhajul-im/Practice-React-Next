import ShimmerUi from "./ShimmerUi";
import FoodItems from "../components/FoodItems";
import SearchFoodItem from "../components/SearchFoodItem";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const Home = () => {
  const { input, handleOnClick, handleOnChange, restaurantFoodItems } =
    useRestaurantMenu();

  return (
    <main className="w-5/6 mx-auto">
      <SearchFoodItem
        input={input}
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />
      {restaurantFoodItems.length === 0 ? (
        <ShimmerUi />
      ) : (
        <FoodItems restaurantFoodItems={restaurantFoodItems} />
      )}
    </main>
  );
};

export default Home;
