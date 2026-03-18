import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtecttiveRoute() {
    let navigate=useNavigate();
  let token=sessionStorage.getItem("Accesstoken")
  return token ? <Outlet/>:navigate('/');
}

export default ProtecttiveRoute