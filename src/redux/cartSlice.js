import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const tempState = { ...action.payload, quantity: 1 };
        state.cart.push(tempState);
      }
    },
    removeFromCart: (state, action) => {
      state.cart.pop(action.payload);
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
