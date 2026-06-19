import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './pages/User'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { useState } from 'react'
import Home from './pages/Home'
import Users from './pages/Users'
import Setting from './pages/Setting'
import Profile from './pages/Profile'


function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  return (
    <>
      <BrowserRouter basename='/simple-authorization'>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/user' element={<User bgColor={bgColor} setBgColor={setBgColor} />} />
          <Route path='/admin' element={<Admin bgColor={bgColor} setBgColor={setBgColor} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
