import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagsAPI";

// export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
//   const tags = await fetch("http://localhost:9000/tags");
//   const jsonData = await tags.json();
//   return jsonData;
// });
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags.data;
});

const initialState = {
  isLoading: false,
  tags: [],
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
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.isLoading = false;
        state.title = [];
        state.isError = true;
      }),
});

export default tagsSlice.reducer;
