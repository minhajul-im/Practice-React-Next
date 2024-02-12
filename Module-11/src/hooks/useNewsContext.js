import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export const useNewsContext = () => useContext(NewsContext);
