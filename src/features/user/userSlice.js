import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null,
  showLoginModal: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
      state.showLoginModal = false
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
    toggleLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal
    },
  },
})

export const { login, logout, toggleLoginModal } = userSlice.actions
export default userSlice.reducer
