import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetching = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!ignore) {
          setNewsData(json);
        }
      } catch (error) {
        throw new Error(`FETCHING FAILED.....`);
      }
    };

    fetching(url);

    return () => {
      ignore = true;
    };
  }, [url]);

  return { newsData, setNewsData };
}
