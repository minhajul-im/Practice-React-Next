import getVideo from "./videoAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  video: {},
  isError: false,
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
      }),
});

export default videoSlice.reducer;
