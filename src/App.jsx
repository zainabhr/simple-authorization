import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './pages/User'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { useState } from 'react'
import Home from './pages/Home'
import Users from './pages/Users'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import ProtectedRoutes from './utilities/ProtectedRoutes'


function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/user' element={<User bgColor={bgColor} setBgColor={setBgColor} />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/admin' element={<Admin bgColor={bgColor} setBgColor={setBgColor} />} />
            <Route path='/setting' element={<Setting />} />
          </Route>
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
          
          <Route path='/profile' element={<Profile />} />
        </Routes>
        
      </HashRouter>
    </>
  )
}

export default App
