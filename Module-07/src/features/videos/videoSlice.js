import getVideos from "./videosAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoad: false,
  videos: [],
  isError: false,
  error: "",
};

// export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
//   const videos = await fetch("http://localhost:9000/videos");
//   const jsonData = await videos.json();
//   return jsonData;
// });

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videoSlice = createSlice({
  name: "videos",
  initialState: initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoad = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoad = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoad = false;

        state.isError = true;
        state.videos = [];
        state.error = action.error.message;
      }),
});

export default videoSlice.reducer;
