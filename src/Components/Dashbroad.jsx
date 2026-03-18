import React, { useState ,useEffect} from 'react'
import api from '../Axios/Axios'
import { Link, useLocation, useNavigate } from 'react-router-dom';
function Dashbroad() {
  let location=useLocation();
  let email=location.state.Email;
  let imageurl=location.state.Imageurl
  console.log("Image URL from backend:", imageurl);
  console.log({email,imageurl})
    let [Data,setdata]=useState([]);
    let navigate=useNavigate();
let myfunction=async()=>{
    let token=sessionStorage.getItem("Accesstoken")
  //  let jsondata=await fetch("https://localhost:7152/api/Product/GetProducts",{method:"GET",headers:{
  //   "Authorization":`Bearer ${token}` 
  //  }})
  let axiosdata=await api.get("api/Product/GetProducts")
  console.log(axiosdata.data)
  //  let jsoadata=await jsondata.json();
   setdata(axiosdata.data)
  
   console.log(axiosdata)
}
let mydeletefunction=async(id)=>{
    // let token=sessionStorage.getItem("Accesstoken")
  // let jsondata=await fetch(`https://localhost:7152/api/Product/DeleteProducts/${id}`,{method:"DELETE",headers:{
  //   "Authorization":`Bearer ${token}` 
  //  }})
  let accesstoken=await api.delete(`api/Product/DeleteProducts/${id}`)
  //  let jsodata=await jsondata.text();
    setdata(prev => prev.filter(item => item.id !== id));
   console.log(accesstoken)
}
console.log(Data)


  return (
    <div>
    <div>
      <h1>{email}</h1>
      <img width="100px" height="100px" src={`https://localhost:7152${imageurl}`} alt="user-Profile" />
    </div>



        <button type='button' onClick={myfunction}>products!</button>
       <button type="button" onClick={()=>{navigate('/Add')}}>AddProducts</button>

        <div className="products-container">
  {Data.map((ele, id) => (
    <div className="product-card" key={id}>
      <div className="product-info">
        <h3>{ele.name}</h3>
        <p><strong>Brand:</strong> {ele.brand}</p>
        <p><strong>Price:</strong> ${ele.price}</p>
        <p><strong>Rating:</strong> {ele.rating} ⭐</p>
        <p><img width="100px" height="100px" src={ele.image} alt='image'></img></p>
        <button type='button' onClick={()=>{mydeletefunction(ele.id)}}>Delete</button>
         <button type='button'onClick={()=>{navigate('/update',{state:{id:ele.id}})}}>update</button>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Dashbroad