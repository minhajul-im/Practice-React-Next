import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}
export const initialState: CounterState = {
  count: 0,
};

export const createCounter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = createCounter.actions;
export default createCounter.reducer;
