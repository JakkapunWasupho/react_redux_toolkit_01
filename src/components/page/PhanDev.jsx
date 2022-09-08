import React from 'react'
import { useSelector } from 'react-redux'

function PhanDev() {

    const { user } = useSelector((state) => ({ ...state }))

    return (
        <>
            {user.value}
        </>
    )
}

export default PhanDev
