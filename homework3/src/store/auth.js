import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.accessToken = action.payload
    },
    storeUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { login, storeUser } = authSlice.actions

export default authSlice.reducer
