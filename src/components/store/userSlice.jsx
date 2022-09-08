import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "Please login",
    user_password: [],
    loading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = "Login success"
            state.user_password = action.payload
            state.loading = true
        },
        logout: (state) => {
            state.value = "Logout success"
            state.loading = false
        }
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer