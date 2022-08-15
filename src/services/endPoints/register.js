// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const registerApi = createApi({
  reducerPath: 'registerUser',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
    registeruser: build.mutation({
      query(body) {
        return {
          url: `registeruser/`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const {
    useRegisteruserMutation
} = registerApi