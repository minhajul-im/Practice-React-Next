import { configureStore } from "@reduxjs/toolkit";
import ReducerCounter from "./counter";

export const store = configureStore({
  reducer: {
    counter: ReducerCounter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
