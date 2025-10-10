import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
      state.totalPrice += newItem.price
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    }
  },
})

export const { addItem, toggleCart } = cartSlice.actions
export default cartSlice.reducer
