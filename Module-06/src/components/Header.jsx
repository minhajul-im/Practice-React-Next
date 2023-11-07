import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
};

export default Header;
