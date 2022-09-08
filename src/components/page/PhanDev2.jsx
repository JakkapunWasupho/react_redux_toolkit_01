import React from 'react'
import { useDispatch } from 'react-redux'

import { login, logout } from '../store/userSlice'

function PhanDev2() {

    const dispatch = useDispatch();

    const user_password = {
        username: "phandev",
        password: "123456"
    }

    const handleLogin = () => {
        dispatch(login(user_password))
    }

    return (
        <div>
            <p>PhanDev2</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
        </div>
    )
}

export default PhanDev2
