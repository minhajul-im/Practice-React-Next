import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_API_FOOD_DETAILS } from "../links/constant";

const useSwiggyFoodDetails = () => {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState(null);

  useEffect(() => {
    fetchFoodDetailsApi();
  }, []);

  const fetchFoodDetailsApi = async () => {
    const fetchData = await fetch(`${SWIGGY_API_FOOD_DETAILS}${id}`);
    const jsonData = await fetchData.json();
    setFoodDetails(jsonData?.data?.cards);
  };

  return {
    foodDetails,
  };
};

export default useSwiggyFoodDetails;
