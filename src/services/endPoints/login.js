import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (payload) => ({
                url: 'login',
                method: 'POST',
                body: {
                    email:payload.username,
                    password: payload.password
                },
            }),
        }),
    }),
})

export const { useLoginUserMutation } = loginApi