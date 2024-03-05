import { useContext } from "react";
import { AuthorContext } from "../contexts";

export const useAuthor = () => {
  return useContext(AuthorContext);
};
