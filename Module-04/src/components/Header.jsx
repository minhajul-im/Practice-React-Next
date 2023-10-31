import { Link } from "react-router-dom";
import { SWIGGY_LOGO } from "../utilities/constantLinks";
import HeaderFunction from "../utilities/headerFunction";

const Header = () => {
  const { btnText, handleOnClick } = HeaderFunction();

  return (
    <header className="bg-amber-600">
      <nav className="w-5/6 mx-auto flex justify-between items-center py-1">
        <Link to="/">
          <img className="h-10" src={SWIGGY_LOGO} alt="Swiggy_Logo" />
        </Link>

        <section className="flex gap-8 items-center">
          <Link
            className="no-underline text-white font-semibold hover:underline"
            to="/"
          >
            Home
          </Link>

          <Link
            className="no-underline text-white font-semibold hover:underline"
            to="/menu"
          >
            Menu
          </Link>

          <Link
            className="no-underline text-white font-semibold hover:underline"
            to="/about"
          >
            About
          </Link>

          <Link
            className="no-underline text-white font-semibold hover:underline"
            to="/contact"
          >
            Contact
          </Link>

          <button
            onClick={handleOnClick}
            className="py-1 px-4 border border-white text-white bg-amber-600 font-semibold rounded hover:bg-white hover:text-amber-600 duration-75"
          >
            {btnText}
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
