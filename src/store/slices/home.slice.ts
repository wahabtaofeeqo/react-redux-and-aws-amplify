import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

interface Post {
    id: any
}

export const postAdapter = createEntityAdapter<Post>({})
export const initialState = postAdapter.getInitialState()

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        postAdded: postAdapter.addOne,
        loadPosts: () => {

        }
    }
})

// actions
export const {loadPosts} = homeSlice.actions

// reducer
export default homeSlice.reducer