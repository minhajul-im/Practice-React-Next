import { useContext } from "react";
import { ProductContext, TypeOfContext } from "../context/ProductContext";

export const useProductContext = (): TypeOfContext => {
  return useContext(ProductContext);
};
