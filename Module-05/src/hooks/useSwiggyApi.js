import { useEffect, useState } from "react";
import { SWIGGY_API_BANGALORE } from "../links/constant";

const useSwiggyApi = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchApiBangalore();
  }, []);

  const fetchApiBangalore = async () => {
    const fetchData = await fetch(SWIGGY_API_BANGALORE);
    const jsonData = await fetchData.json();
    const data = jsonData?.data?.cards;
    setRestaurantData(data);
  };
  return {
    restaurantData,
  };
};

export default useSwiggyApi;
