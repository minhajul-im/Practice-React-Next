import { useEffect, useState } from "react";
import {
  SWIGGY_FOOD_API_BANGALURU,
  SWIGGY_FOOD_API_CENNAI,
  SWIGGY_FOOD_API_DHELY,
} from "../utilities/constantLinks";

const useRestaurantMenu = () => {
  const [input, setInput] = useState("");
  const [searchFoodItems, setSearchFoodItems] = useState([]);
  const [restaurantFoodItems, setRestaurantFoodItems] = useState([]);

  useEffect(() => {
    margeRestaurantApi();
  }, []);

  const fetchResFoodApi = async (link) => {
    const fetchData = await fetch(link);
    const jsonData = await fetchData.json();
    return jsonData;
  };
  const margeRestaurantApi = async () => {
    const cennaiFood = await fetchResFoodApi(SWIGGY_FOOD_API_CENNAI);
    const dhelyFood = await fetchResFoodApi(SWIGGY_FOOD_API_DHELY);
    const bangaluruFood = await fetchResFoodApi(SWIGGY_FOOD_API_BANGALURU);

    const getFoodApi = await Promise.allSettled([
      cennaiFood,
      dhelyFood,
      bangaluruFood,
    ]);

    const cennaiFoodArray =
      getFoodApi[0].value.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const dhelyFoodArray =
      getFoodApi[1].value.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const bangaluruFoodArray =
      getFoodApi[1].value.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const allFoodItems = [
      ...cennaiFoodArray,
      ...dhelyFoodArray,
      bangaluruFoodArray,
    ];

    setSearchFoodItems(allFoodItems);
    setRestaurantFoodItems(allFoodItems);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnClick = () => {
    const filteredFoodItems = searchFoodItems.filter((item) =>
      item?.info?.name.includes(input)
    );
    setRestaurantFoodItems(filteredFoodItems);
    setInput("");
  };

  return {
    input,
    handleOnClick,
    handleOnChange,
    restaurantFoodItems,
  };
};

export default useRestaurantMenu;
