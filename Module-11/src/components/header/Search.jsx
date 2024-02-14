import { useEffect, useState } from "react";

import { search } from "../../constant/newsService";
import { useDebounce } from "../../hooks/useDebounce";
import { useNewsContext } from "../../hooks/useNewsContext";

export default function Search() {
  const [query, setQuery] = useState("");

  const debounceValue = useDebounce(query, 1000);

  const { newsData, setNewsData } = useNewsContext();

  useEffect(() => {
    const searching = async (url) => {
      const res = await fetch(url);
      const json = await res.json();

      setNewsData({
        ...newsData,
        articles: json?.result,
      });
    };
    /**
     // TODO  search korar por ami input search clear korbo tokhn abar ami cai age data show koraite, 
     */

    if (debounceValue) {
      searching(search + debounceValue);
    }
  }, [query, debounceValue, newsData, setNewsData]);

  return (
    <div className='relative flex items-center w-300 overflow-hidden rounded-md border border-gray-300 bg-white transition duration-200 ease-in-out focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 hover:w-500'>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type='text'
        placeholder='Search...'
        className={`px-3 py-2 text-base focus:outline-none placeholder-opacity-50 hover:placeholder-opacity-100 dark:text-gray-700 dark:focus:text-gray-700 transition-all w-[400px]`}
      />
      <svg
        className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:opacity-100 dark:text-gray-300'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
}
