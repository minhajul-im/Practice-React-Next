import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectedTags: (state, action) => {
      state.tags.push(action.payload);
    },
    removedTags: (state, action) => {
      const findTag = state.tags.indexOf(action.payload);

      if (findTag !== -1) {
        state.tags.splice(findTag, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { removedTags, selectedTags, searched } = filterSlice.actions;

export default filterSlice.reducer;
