import { useEffect, useRef, useState } from "react";

import { useNewsContext } from "../../hooks";
import { search } from "../../constant/newsServices";
import searchIcon from "../../assets/icons/search.svg";

export default function Search() {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef();
  const { data, setData } = useNewsContext();

  useEffect(() => {
    const getSuggetion = async () => {
      const res = await fetch(search + searchQuery);
      const json = await res.json();
      if (json.message === "Invalid query") {
        return;
      } else {
        setData({
          ...data,
          articles: json.result,
        });
      }
    };
    ref.current = setTimeout(() => {
      getSuggetion();
    }, 500);

    return () => {
      clearTimeout(ref.current);
    };
  }, [searchQuery]);

  return (
    <form
      className={`flex items-center border border-gray-400  justify-between px-4 py-2 rounded ${
        toggle && "w-[400px]"
      }`}
    >
      {toggle && (
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
