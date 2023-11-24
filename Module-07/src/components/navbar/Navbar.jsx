import Search from "./Search";
import logo from "../../assets/lws.svg";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-1">
        <Link to="/">
          <img className="h-10" src={logo} alt="Learn with Sumit" />
        </Link>
        <Search />
      </div>
    </nav>
  );
}
