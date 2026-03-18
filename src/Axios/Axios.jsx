import axios from 'axios';

let api=axios.create({
    baseURL:"https://localhost:7152/",
    withCredentials:true

})
api.interceptors.request.use((config)=>{
   let token=sessionStorage.getItem("Accesstoken")
   if(token){
    config.headers.Authorization=`Bearer ${token}`
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