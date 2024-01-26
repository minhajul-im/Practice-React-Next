import { createContext, useContext } from "react";

export const LevelContext = createContext(0);

export const useSectionLevel = () => useContext(LevelContext);
