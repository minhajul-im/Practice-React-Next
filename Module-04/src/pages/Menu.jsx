import ShimmerUi from "./ShimmerUi";
import FoodItems from "../components/FoodItems";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const Menu = () => {
  const { restaurantFoodItems } = useRestaurantMenu();
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-4xl text-amber-700 text-center font-extrabold my-8 font-mono">
        Hey these are all Items 😋
      </h1>

      {restaurantFoodItems.length === 0 ? (
        <ShimmerUi />
      ) : (
        <FoodItems restaurantFoodItems={restaurantFoodItems} />
      )}
    </main>
  );
};

export default Menu;
