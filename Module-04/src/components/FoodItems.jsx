import { Link } from "react-router-dom";
import CardFood from "./CardFood";
import DiscountFood from "./DiscountFood";

const FoodItems = ({ restaurantFoodItems }) => {
  const DiscountCardFood = DiscountFood(CardFood);

  console.log(restaurantFoodItems);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {restaurantFoodItems.slice(0, 16).map((item) => (
        <Link to={`/itemDetails/${item?.info?.id}`} key={item?.info?.id}>
          {item?.info?.avgRating > 4.2 ? (
            <DiscountCardFood item={item} />
          ) : (
            <CardFood item={item} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default FoodItems;
