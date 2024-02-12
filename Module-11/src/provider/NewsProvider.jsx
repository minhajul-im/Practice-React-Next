import { useFetchData } from "../hooks";
import { url } from "../constant/newsService";
import { NewsContext } from "../context/NewsContext";

// eslint-disable-next-line react/prop-types
export default function NewsProvider({ children }) {
  const { newsData, setNewsData } = useFetchData(url.home);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      {children}
    </NewsContext.Provider>
  );
}
