import { createContext } from "react";

export const SearchContext = createContext({
  search: "",
  videos: [],
});
