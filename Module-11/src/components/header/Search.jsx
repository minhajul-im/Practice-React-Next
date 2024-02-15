import { useEffect, useState } from "react";

import { search } from "../../constant/newsService";
import { useDebounce } from "../../hooks/useDebounce";
import { useNewsContext } from "../../hooks/useNewsContext";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Search() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const debouncedValue = useDebounce(query, 1000);
  const { darkMode } = useThemeContext();

  const { newsData, setNewsData } = useNewsContext();

  useEffect(() => {
    const fetchNews = async () => {
      if (!debouncedValue) return;

      try {
        const response = await fetch(`${search}${debouncedValue}`);
        const data = await response.json();

        setNewsData({
          ...newsData,
          articles: data?.result || [],
        });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [debouncedValue]);

  return (
    <div
      className={`w-[500px] rounded-3xl  flex items-center gap-3 ${
        !show ? "justify-end py-2" : "border"
      } `}
    >
      {show && (
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='search'
          className={`w-full outline-none ps-6 py-2 rounded-l-3xl ${
            darkMode
              ? "text-gray-700 bg-slate-300"
              : "bg-gray-300 text-gray-700"
          }`}
        />
      )}
      <svg
        onClick={() => setShow(!show)}
        className={`w-6 h-6 cursor-pointer mr-3`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    </div>
  );
}

/**
 * 
  // useEffect(() => {
  //   if (query === "") return;

  //   const searching = async (url) => {
  //     const res = await fetch(url);
  //     const json = await res.json();

  //     setNewsData((prevData) => ({
  //       ...prevData,
  //       articles: json?.result,
  //     }));
  //   };
  //   if (debounceValue) {
  //     searching(search + debounceValue);
  //   }
  // }, [debounceValue]);

  useEffect(() => {
    if (query === "") return;
    if (debounceValue) {
      const x = async (url) => {
        await searchingNewsData(url);
      };
      x(search + debounceValue);
    }
  }, []);

  const searchingNewsData = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (error) {
      throw new Error(`SEARCHING FAILD....... ${error}`);
    }
  };
 */
