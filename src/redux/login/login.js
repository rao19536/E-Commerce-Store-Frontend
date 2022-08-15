import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: [],
}
export const userLogin = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.login.push(action.payload)
    },
  },
})

export const { loginAction } = userLogin.actions
export default userLogin.reducer
