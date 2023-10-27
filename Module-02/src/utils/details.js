import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const detailsFunc = () => {
  const { resId } = useParams();

  const [menu, setMenu] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await response.json();

    setMenu(jsonData?.data?.cards[0]?.card?.card?.info);

    setList(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };

  return { menu, list };
};

export default detailsFunc;
