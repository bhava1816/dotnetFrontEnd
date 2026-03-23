import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function ProtecttiveRoute() {
  // let token = useSelector((store) => store.Login.user?.accessToken)
  let token=sessionStorage.getItem('AccessToken');
  console.log(token)

  return token ? <Outlet /> : <Navigate to="/" replace />
}
export default ProtecttiveRoute 