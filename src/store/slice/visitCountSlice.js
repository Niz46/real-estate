import { createSlice } from "@reduxjs/toolkit";

const initialVisitCount = Number(localStorage.getItem("visitCount")) || 0;

const visitCountSlice = createSlice({
  name: "visitCount",
  initialState: {
    count: initialVisitCount,
  },
  reducers: {
    incrementVisitCount: (state) => {
      state.count += 1;
      localStorage.setItem("visitCount", state.count);
    },
  },
});

export const { incrementVisitCount } = visitCountSlice.actions;
export default visitCountSlice.reducer;
