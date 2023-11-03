import React from "react";
import useSwiggyApi from "../hooks/useSwiggyApi";
import CartMenu from "../components/CartMenu";
import CartShimmer from "../shimmer/CartShimmer";

const Menu = () => {
  const { restaurantData } = useSwiggyApi();

  if (restaurantData === null) return <CartShimmer />;

  //   console.log(
  //     restaurantData[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
  //       ?.info
  //   );
  return (
    <main className="">
      <section className="my-10 flex justify-end">
        <input
          className="border border-amber-600 py-1 px-2 rounded outline-none border-r-0 rounded-r-none"
          type="text"
        />
        <button className="text-white bg-amber-600 py-2 px-6 border-s-0 rounded rounded-s-none font-semibold">
          Search
        </button>
      </section>

      <section className="grid grid-cols-4 gap-6">
        {restaurantData[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => (
            <div key={item?.info?.id}>
              <CartMenu item={item} />
            </div>
          )
        )}
      </section>
    </main>
  );
};

export default Menu;
