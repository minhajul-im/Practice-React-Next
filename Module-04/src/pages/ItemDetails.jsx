import FoodDetails from "../components/FoodDetails";
import useItemDetails from "../hooks/useItemDetails";
import FoodRecommend from "../components/FoodRecommend";

const ItemDetails = () => {
  const { menu, lists } = useItemDetails();

  return (
    <main className="w-4/6 mx-auto">
      <FoodDetails menu={menu} />
      <FoodRecommend lists={lists} />
    </main>
  );
};

export default ItemDetails;
