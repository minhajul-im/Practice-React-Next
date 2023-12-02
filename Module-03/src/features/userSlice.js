import { createSlice } from "@reduxjs/toolkit";

const initialState = { uid: "", email: "", displayName: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
