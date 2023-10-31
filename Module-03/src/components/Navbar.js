import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav style={{ padding: "4px 0", backgroundColor: "aqua" }}>
        <ul style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <li style={{ listStyle: "none" }}>
            <Link to={"/"}>Home</Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/about"}>About</Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
