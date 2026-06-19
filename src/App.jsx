import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './pages/UserHome'
import Login from './pages/Login'
import Admin from './pages/AdminHome'
import { useState } from 'react'


function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  return (
    <>
      <BrowserRouter basename='/simple-authorization'>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/user' element={<User bgColor={bgColor} setBgColor={setBgColor} />} />
          <Route path='/admin' element={<Admin bgColor={bgColor} setBgColor={setBgColor} />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
