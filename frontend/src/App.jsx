import React from 'react'
import Home from './Layouts/Home'
import Courses from './Layouts/Courses'
import { Routes,Route } from 'react-router'
import Signup from './components/Signup'
const App = () => {
  return (
    <>
<div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/courses' element={<Courses/>}/>
<Route path='/signup' element={<Signup/>}/>
  </Routes>
  </div>

    </>
  )
}

export default App