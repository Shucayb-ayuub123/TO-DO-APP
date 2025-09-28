import React from 'react'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'
type Props = {
    children :  JSX.Element
}
const ProtectRout = ({children} : Props) => {

    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/Login" />
    }
  return children
}

export default ProtectRout