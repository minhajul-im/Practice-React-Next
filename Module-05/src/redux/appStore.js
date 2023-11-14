import cartSlice from "./cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    cartFood: cartSlice,
  },
});

export default appStore;
