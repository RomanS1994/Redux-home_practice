import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectBalance = (state) => state.balance.value;

export const useBalance = () => useSelector(selectBalance);

export const slice = createSlice({
  name: "balance",
  initialState: { value: 10 },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;
