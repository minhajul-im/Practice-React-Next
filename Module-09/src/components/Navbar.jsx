import { useContext, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";

import lwsImg from "../assets/lws.svg";
import searchImg from "../assets/search.svg";
import ContextApi from "../utils/ContextApi";

export default function Navbar() {
  const { search, state, setState } = useContext(ContextApi);
  const [input, setInput] = useState("");

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (!match) navigate("/");

    const filtered = search.filter((video) =>
      video?.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setState(filtered);
  };

  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to={"/"}>
          <img className="h-10" src={lwsImg} alt="Learn with Sumit" />
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          {/* <!-- search --> */}
          <div>
            <input
              onChange={(e) => setInput(e.target.value)}
              className="outline-none border-none mr-2"
              name="search"
              type="search"
              placeholder="Search"
            />
            <img
              onClick={handleSearchClick}
              className="inline h-4 cursor-pointer"
              src={searchImg}
              alt="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
