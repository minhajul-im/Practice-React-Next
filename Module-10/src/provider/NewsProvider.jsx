import { url } from "../constant/newsServices";

import { NewsContext } from "../context/NewsContext";
import { useFetchNews } from "../hooks";

// eslint-disable-next-line react/prop-types
export default function NewsProvider({ children }) {
  const { data, setData } = useFetchNews(url.home);

  return (
    <NewsContext.Provider value={{ data, setData }}>
      {data === null ? <p>Fetching....</p> : children}
    </NewsContext.Provider>
  );
}
