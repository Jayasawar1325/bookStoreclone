import React from 'react'
import Home from './Layouts/Home'
import Courses from './Layouts/Courses'
import { Routes,Route, Navigate } from 'react-router'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authContext'
const App = () => {
  const {authUser,setAuthUser}= useAuth()
  return (
    <>
<div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/courses' element={ authUser ? <Courses/> : <Navigate to ='/signup'/>}/>
<Route path='/signup' element={<Signup/>}/>
  </Routes>
  <Toaster/>
  </div>

    </>
  )
}

export default App