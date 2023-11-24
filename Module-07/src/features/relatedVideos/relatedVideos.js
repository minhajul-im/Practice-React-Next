import getRelatedVideos from "./relatedVideosAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
};

export const fetchRelatedVideos = createAsyncThunk(
  "related/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });

    return relatedVideos.data;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
      }),
});

export default relatedVideosSlice.reducer;
