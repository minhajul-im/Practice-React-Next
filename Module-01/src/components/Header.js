import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("login");
  const handleClick = () => {
    loginLogout === "login"
      ? setLoginLogout("logout")
      : setLoginLogout("login");
    // if (loginLogout === "login") {
    //   setLoginLogout("logout");
    // } else if (loginLogout === "logout") {
    //   setLoginLogout("login");
    // }
  };
  return (
    <header className="header">
      <Link className="link" to={"/"}>
        <img
          className="img"
          src="https://cdn.imgbin.com/17/5/6/imgbin-bald-eagle-logo-eagle-black-and-white-eagle-illustration-my6bCjw41bJ0nyJUGM4bhMdSg.jpg"
          alt="brand"
        />
      </Link>

      <ul className="ul">
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </li>

        <li>
          <button onClick={handleClick}>{loginLogout}</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
