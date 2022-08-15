import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
      getAllproducts: builder.query({
        query: () => `products`,
      }),
    }),
  })

  export const { useGetAllproductsQuery } = productApi