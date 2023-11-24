import { configureStore } from "@reduxjs/toolkit";

import tagsSlice from "../features/tags/tagsSlice";
import videosSlice from "../features/videos/videosSlice";
import videoSlice from "../features/video/videoSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideos";

const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
  },
});

export default store;
