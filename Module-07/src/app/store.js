import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/videos/videoSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
  },
});

export default store;
