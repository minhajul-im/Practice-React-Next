import { useContext, createContext } from "react";

export const TaskContext = createContext(null);

export const useTaskContext = () => useContext(TaskContext);

export const ShowContext = createContext(false);

export const useShowContext = () => useContext(ShowContext);
