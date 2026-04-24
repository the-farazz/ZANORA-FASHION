import { createSlice } from '@reduxjs/toolkit';

const getInitialItems = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('zanora_cart');
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState = {
  items: getInitialItems(),
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size,
          quantity,
        });
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('zanora_cart', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('zanora_cart', JSON.stringify(state.items));
      }
    },
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('zanora_cart', JSON.stringify(state.items));
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== 'undefined') {
        localStorage.removeItem('zanora_cart');
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity, toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
