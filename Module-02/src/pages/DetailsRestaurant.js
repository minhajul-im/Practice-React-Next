import detailsFunc from "../utils/details";
import Recommend from "../components/Recommend";
import FoodDetails from "../components/FoodDetails";
import DetailsShimmer from "../components/DetailsShimmer";

const DetailsRestaurant = () => {
  const { menu, list } = detailsFunc();

  if (menu === null) {
    return <DetailsShimmer />;
  }
  if (list === null) {
    return <DetailsShimmer />;
  }

  return (
    <main className="w-4/6 mx-auto">
      <FoodDetails menu={menu} />
      <h2 className="text-2xl font-bold text-gray-700 py-8">Recommend Food!</h2>
      <Recommend list={list} />
    </main>
  );
};

export default DetailsRestaurant;
