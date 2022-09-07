import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "value text state"
}

export const userSlice = createSlice({
    name: 'userStore',
    initialState: initialState,
    reducers: {

    }
})

export default userSlice.reducer