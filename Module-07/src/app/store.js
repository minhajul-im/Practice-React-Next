import { configureStore } from "@reduxjs/toolkit";

import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";
import filterSlice from "../features/filter/filterSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideos";

const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
    filter: filterSlice,
  },
});

export default store;
