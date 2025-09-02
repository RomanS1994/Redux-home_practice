import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



export const selectLen = (state) => state.len.value;

export const useLen = () => useSelector(selectLen);

export const slice = createSlice({
  name: "len",
  initialState: { value: "uk" },
  reducers: {
    changeLen(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeLen } = slice.actions;

export default slice.reducer;
