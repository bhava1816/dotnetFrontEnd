import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import axios  from 'axios';
function Login() {

    let emailref=useRef();
    let passwordref=useRef();
  let navigate=useNavigate();
let myfunction=async()=>{
    let mybody={
    email:emailref.current.value,
    password:passwordref.current.value
}
//    let jsondata=await fetch("https://localhost:7152/api/Login/login",{method:"POST", headers: { "Content-Type": "application/json" },body:JSON.stringify(mybody)})
      let axiosdata=await axios.post("https://localhost:7152/api/login",mybody)
      console.log(axiosdata.data)
//    let jsodata=await jsondata.json();
//    console.log(jsodata)
   if(axiosdata!=null){
    navigate('/DashBroad',{state:{Email:axiosdata.data.email,Imageurl:axiosdata.data.imageurl}});
    sessionStorage.setItem("Accesstoken",axiosdata.data.accessToken)
    // sessionStorage.setItem("Accesstoken",jsodata.accessToken)
   }
   emailref.current.value=''
   passwordref.current.value=''
}
  return (
    <div className="login-container">
        <form className="login-form">
            <div  className="form-group">
                <label>Email</label>
                <input type='email' ref={emailref}></input>
            </div>
            <div  className="form-group">
                <label>Password</label>
                <input type='password' ref={passwordref}></input>
            </div>
           <button type='button' onClick={myfunction}>clickme!</button>
        </form>
    </div>
  )
}

export default Login