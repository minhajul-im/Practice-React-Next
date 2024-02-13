import { useEffect, useState } from "react";

const fetchNews = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    throw new Error(`FETCHING ERROR: ${error}`);
  }
};

export function useFetchNews(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetch = async (url) => {
      const getData = await fetchNews(url);
      if (!ignore) {
        setData(getData);
      }
    };

    fetch(url);

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, setData };
}
