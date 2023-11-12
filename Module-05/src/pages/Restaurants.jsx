import FoodDetails from "../components/details/FoodDetails";
import DetailsShimmer from "../shimmer/DetailsShimmer";
import useSwiggyFoodDetails from "../hooks/useSwiggyFoodDetails";
import RelatedFoodDetails from "../components/details/RelatedFoodDetails";

const Restaurants = () => {
  const { foodDetails } = useSwiggyFoodDetails();

  if (foodDetails === null) return <DetailsShimmer />;

  const categories =
    foodDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (items) =>
        items?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <section className="w-4/6 mx-auto">
      <FoodDetails foodDetails={foodDetails[0]} />

      {categories.map((items) => (
        <RelatedFoodDetails key={items?.card?.card?.title} items={items} />
      ))}
    </section>
  );
};

export default Restaurants;
