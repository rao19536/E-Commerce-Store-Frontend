import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
let id = localStorage.getItem('id')

export const profileApi = createApi({
  reducerPath: 'User',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
    singleUser: build.query({
      query: () => `singleUser/${id}`,
    }),
    allUsers: build.query({
      query: () => `allusers`,
    }),
    updateProfile: build.mutation({
      query: (payload) => ({
        url: `updateuser/${id}`,
        method: 'PUT',
        body: payload,
      }),
    })
  }),
})

export const { useSingleUserQuery, useUpdateProfileMutation, useAllUsersQuery } = profileApi