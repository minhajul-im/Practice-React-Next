import { useState } from "react";
import { SWIGGY_LOGO } from "../utils/allLinks";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const handleOnClick = () => {
    btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
  };
  return (
    <header className="bg-amber-600">
      <nav className="w-5/6 mx-auto flex justify-between items-center py-1">
        <a href="/">
          <img className="h-10" src={SWIGGY_LOGO} alt="Swiggy_Logo" />
        </a>

        <ul className="flex gap-8 items-center">
          <li>
            <a
              className="no-underline text-white font-semibold hover:underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="no-underline text-white font-semibold hover:underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="no-underline text-white font-semibold hover:underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="no-underline text-white font-semibold hover:underline"
              href="/"
            >
              Home
            </a>
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
