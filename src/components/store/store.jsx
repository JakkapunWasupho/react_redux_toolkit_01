import { configureStore } from '@reduxjs/toolkit'
import itSlice from './itSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        it: itSlice
    },
})