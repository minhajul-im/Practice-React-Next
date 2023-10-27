import { useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_LOGO } from "../utils/allLinks";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const handleOnClick = () => {
    if (btnText === "Login") {
      alert("Logout Successful!");
      setBtnText("Logout");
    } else {
      alert("Login Successful!");
      setBtnText("Login");
    }
  };
  return (
    <header className="bg-amber-600">
      <nav className="w-5/6 mx-auto flex justify-between items-center py-1">
        <Link to="/">
          <img className="h-10" src={SWIGGY_LOGO} alt="Swiggy_Logo" />
        </Link>

        <ul className="flex gap-8 items-center">
          <li>
            <Link
              className="no-underline text-white font-semibold hover:underline"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-white font-semibold hover:underline"
              to="/menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-white font-semibold hover:underline"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-white font-semibold hover:underline"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleOnClick}
              className="py-1 px-4 border border-white text-white bg-amber-600 font-semibold rounded hover:bg-white hover:text-amber-600 duration-75"
            >
              {btnText}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
