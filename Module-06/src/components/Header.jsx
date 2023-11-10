import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../utils/ContextData";

const Header = () => {
  const { username } = useContext(ContextData);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "5px 0",
      }}
    >
      <Link to={"/"}>home</Link>
      <Link to={"/task"}>Task</Link>
      <Link to={"/food"}>Food</Link>
      <li>🥰 {username}</li>
    </nav>
  );
};

export default Header;
