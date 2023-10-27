import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/allLinks";

const restaurant = () => {
  const [input, setInput] = useState("");
  const [resData, setResData] = useState([]);
  const [searchResData, setSearchResData] = useState([]);

  useEffect(() => {
    fetchApiSwiggy();
  }, []);

  const fetchApiSwiggy = async () => {
    const response = await fetch(SWIGGY_API);
    const json = await response.json();
    const restaurants =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(restaurants);
    setSearchResData(restaurants);
  };

  const handleOnClick = () => {
    const sort = searchResData.filter((item) =>
      item?.info?.name.includes(input)
    );
    setResData(sort);
    setInput("");
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return {
    input,
    resData,
    handleOnChange,
    handleOnClick,
  };
};

export default restaurant;
