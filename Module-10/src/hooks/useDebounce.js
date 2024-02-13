import { useState, useEffect } from "react";

export const useDebounce = (callback, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, callback, delay]);

  return (value) => {
    setDebouncedValue(value);
  };
};
