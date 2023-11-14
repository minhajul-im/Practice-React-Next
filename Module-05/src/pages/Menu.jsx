import { Link } from "react-router-dom";
import CartShimmer from "../shimmer/CartShimmer";
import CartMenu from "../components/menu/CartMenu";
import TopCartMenu from "../components/menu/TopCartMenu";
import useSwiggyFoodMenu from "../hooks/useSwiggyFoodMenu";

const Menu = () => {
  const { restaurantData } = useSwiggyFoodMenu();

  const TopCartMenus = TopCartMenu(CartMenu);

  if (restaurantData === null) return <CartShimmer />;

  return (
    <main className="my-10">
      <section className="grid grid-cols-4 gap-6">
        {restaurantData[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => (
            <Link to={`/restaurants/${item?.info?.id}`} key={item?.info?.id}>
              {item?.info?.avgRating >= 4.5 ? (
                <TopCartMenus item={item} />
              ) : (
                <CartMenu item={item} />
              )}
            </Link>
          )
        )}
      </section>
    </main>
  );
};

export default Menu;
