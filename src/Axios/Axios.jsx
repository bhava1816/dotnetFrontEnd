import axios from 'axios';
import { useSelector } from 'react-redux';

let api=axios.create({
    baseURL:"https://localhost:7152/",
    withCredentials:true

})
api.interceptors.request.use((config)=>{
    // let accesstoken=useSelector((state)=>{
    //  return store.Login.user?.accessToken
    // })
   let token=sessionStorage.getItem("Accesstoken")
   if(accesstoken){
    config.headers.Authorization=`Bearer ${accesstoken}`
   }
   return config
})
api.interceptors.response.use(
    (response)=>{ return response},
    (err)=>{
        return Promise.reject(err)
    }

)
export default api;