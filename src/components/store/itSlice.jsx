import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "it Stroe",
    user_password: [],
    loading: false
}

export const itSlice = createSlice({
    name: 'it',
    initialState,
    reducers: {

    },
})


export default itSlice.reducer