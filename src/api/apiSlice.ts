import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reducerPath = "api"
export const baseUrl = "http://localhost:5000/api/"

const baseQuery = fetchBaseQuery({baseUrl})

export const apiSlice = createApi({
    baseQuery,
    reducerPath,
    endpoints: builder => ({
        
    })
})