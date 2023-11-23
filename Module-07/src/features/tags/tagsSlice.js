import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagsAPI";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const initialState = {
  isLoading: false,
  title: "",
  isError: false,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isError = false;
        state.isError = false;
        state.title = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default tagsSlice.reducer;
