import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemDetails = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState(null);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await response.json();

    setMenu(jsonData?.data?.cards[0]?.card?.card?.info);

    setLists(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };

  return { menu, lists };
};

export default useItemDetails;
