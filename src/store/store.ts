import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slices/home.slice'
import { apiSlice } from '../api/apiSlice'

export const store =  configureStore({
    reducer: {
        home: homeSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch