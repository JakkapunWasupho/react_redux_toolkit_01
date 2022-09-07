import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./storeSlice"

export const store = configureStore({
    reducer: {
        userAdmin: userSlice
    }
})