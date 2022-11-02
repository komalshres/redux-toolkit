import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../dummyApi";

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
