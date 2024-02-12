import { useEffect, useReducer } from "react";

import newsReducer from "../reducer/newsReducer";
import { NewsContext } from "../context/NewsContext";
import { useFetchData } from "../hooks/useFetchData";
import { url } from "../constant/newsServices";

export default function NewsProvider({ children }) {
  const { data, loading, error } = useFetchData(url.home);

  const [state, dispatch] = useReducer(newsReducer, {
    data: null,
    loading,
    error,
  });

  useEffect(() => {
    if (data !== null) {
      dispatch({ type: "FETCH_SUCCESS", data });
    }
  }, [data]);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}
