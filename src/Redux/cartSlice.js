// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.items.find(item => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      state.totalAmount += payload.price;
    },
    updateQuantity: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload.id);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        item.quantity = payload.quantity;
        state.totalAmount += item.price * item.quantity;
      }
    },
    removeFromCart: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== payload);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
