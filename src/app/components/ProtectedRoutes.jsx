import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux/es/hooks/useSelector'


const ProtectedRoutes = () => {

  const nameProduct = useSelector(state => state.nameProduct)

  if (nameProduct) {
    return <Outlet/>
  } else {
    return <Navigate to='/'/>
  }


  return (
    <div>
        <h1>Hello is ProtectedRoutes</h1>
    </div>
  )
}

export default ProtectedRoutes