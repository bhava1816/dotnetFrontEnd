import React, { useEffect, useRef } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import axios  from 'axios';
import { LOGIN_REQUEST } from '../assets/Saga/SagaTypes';
import { store } from '../assets/Store/Store';
function Login() {

    let emailref=useRef();
    let passwordref=useRef();
  let navigate=useNavigate();
  let dispatch=useDispatch();
 
let accessToken = useSelector((store) => store.Login.user?.accessToken)

useEffect(() => {
  if (accessToken) {
    navigate('/dashboard')
  }
}, [accessToken])

let myfunction = async () => {
  let mybody = {
    email: emailref.current.value,
    password: passwordref.current.value
  }

  dispatch({ type: LOGIN_REQUEST, payload: { data: mybody } })
}



//    let jsondata=await fetch("https://localhost:7152/api/Login/login",{method:"POST", headers: { "Content-Type": "application/json" },body:JSON.stringify(mybody)})
    //   let axiosdata=await axios.post("https://localhost:7152/api/login",mybody)
    //   console.log(axiosdata.data)
//    let jsodata=await jsondata.json();
//    console.log(jsodata)
//    if(axiosdata!=null){
//     navigate('/DashBroad',{state:{Email:axiosdata.data.email,Imageurl:axiosdata.data.imageurl}});
//     sessionStorage.setItem("Accesstoken",axiosdata.data.accessToken)
//     // sessionStorage.setItem("Accesstoken",jsodata.accessToken)
//    }

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