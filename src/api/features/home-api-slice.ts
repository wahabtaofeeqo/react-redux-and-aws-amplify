import { postAdapter } from "../../store/slices/home.slice";
import { apiSlice } from "../apiSlice";
import { createSlice, createSelector } from '@reduxjs/toolkit'

export const homeAPISlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadPosts: builder.query({
            query: () => 'posts',
            transformResponse: (response: any) => {
                return postAdapter.setAll(postAdapter.getInitialState(), response)
            },
        })
    })
})

export const selectPostsResult = homeAPISlice.endpoints.loadPosts.select({})
const selectPosts = createSelector(selectPostsResult, response => response.data)

export const {selectAll, selectEntities} = 
    postAdapter.getSelectors((state: any) => selectPosts(state) ?? postAdapter.getInitialState())

// Generated hooks
export const { useLoadPostsQuery } = homeAPISlice