import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


function Protected() {
    const value = useSelector((state)=>{
        return state
    })
    console.log('jjjjjjjjjjjjjjjjjjjjjj')
    console.log(value)
  return value.user ? <Outlet/> : <Navigate to='/login'/>
}

export default Protected

