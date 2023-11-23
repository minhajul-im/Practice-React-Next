import { configureStore } from "@reduxjs/toolkit";

import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/videos/videoSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
  },
});

export default store;
