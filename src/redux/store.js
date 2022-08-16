import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from '../services/endPoints/products/products'
import { loginApi } from '../services/endPoints/login'
import { registerApi } from '../services/endPoints/register'
import {profileApi} from '../services/endPoints/users/profile'
console.log('profileApi', profileApi)
export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
})

setupListeners(store.dispatch)