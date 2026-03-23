// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './Components/Signup'
import Login from './Components/Login';
import Dashbroad from './Components/Dashbroad';
import ProtecttiveRoute from './Components/ProtecttiveRoute';
import Update from './Components/Update';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
      <Route element={<ProtecttiveRoute></ProtecttiveRoute>}><Route path='/dashboard' element={<Dashbroad></Dashbroad>}></Route></Route>
      <Route path='/update' element={<Update></Update>}></Route>
      <Route path='/Add' element={<AddProduct></AddProduct>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
