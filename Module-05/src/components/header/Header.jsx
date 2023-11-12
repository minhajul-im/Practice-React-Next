import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cartFood.items);
  // console.log(cartItems);

  return (
    <nav className="w-5/6 mx-auto flex justify-between items-center border-b border-b-gray-300">
      <Link to={"/"}>
        <img
          className="w-[30px] h-[25px]"
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="swiggy"
        />
      </Link>

      <section className="flex gap-12 items-center justify-end text-gray-700 font-semibold py-2 capitalize">
        <li className="list-none">🔎 search</li>
        <li className="list-none">🎁 offers</li>
        <li className="list-none">
          <Link to={"/cart"} className="no-underline hover:text-amber-600">
            🛒({cartItems.length}) cart
          </Link>
        </li>
        <li className="list-none">☃ sing in</li>
      </section>
    </nav>
  );
};

export default Header;
