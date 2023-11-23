import { configureStore } from "@reduxjs/toolkit";

import tagsSlice from "../features/tags/tagsSlice";
import videosSlice from "../features/videos/videosSlice";
import videoSlice from "../features/video/videoSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
  },
});

export default store;
