import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    setLoading({
      status: true,
      message: "Finding News Data...",
    });

    const fetch = async (url) => {
      const res = await getData(url);

      if (!ignore) {
        setData(res);
      }
    };

    fetch(url);

    return () => {
      ignore = true;
    };
  }, [url]);

  const getData = async (url) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching News Data👌...",
      });
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`News Data fetching faild: ${response.status}😥...`);
      }
      return await response.json();
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  return { data, error, loading };
}
