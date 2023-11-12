import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

const appStore = configureStore({
  reducer: {
    cartFood: cartSlice,
  },
});

export default appStore;
