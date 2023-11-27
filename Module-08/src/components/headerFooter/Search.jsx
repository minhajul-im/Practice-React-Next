import { useContext, useState } from "react";
import searchImg from "../../assets/search.svg";
import { SearchContext } from "../../utilities/SearchContext";

export default function Search() {
  const { search, setInput, videos } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img className="inline h-4 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
}
