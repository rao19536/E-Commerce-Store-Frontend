import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = (props) => {
  let getToken = localStorage.getItem('token')
  return (
    getToken ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoutes