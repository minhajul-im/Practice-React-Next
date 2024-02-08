import { useState } from "react";
import searchIcon from "../../assets/icons/search.svg";

export default function Search() {
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <form
      className={`flex items-center border border-gray-400  justify-between px-4 py-2 rounded ${
        toggle && "w-[400px]"
      }`}
    >
      {toggle && (
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type='search'
          className='outline-none w-full'
        />
      )}
      <img
        onClick={() => setToggle(!toggle)}
        src={searchIcon}
        className='cursor-pointer'
        alt='Search'
      />
    </form>
  );
}
