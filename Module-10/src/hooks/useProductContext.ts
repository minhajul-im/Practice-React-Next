import { useContext } from "react";
import { ProductContext, TypeOfContext } from "../context/useContext";

export const useProductContext = (): TypeOfContext => {
  return useContext(ProductContext);
};
