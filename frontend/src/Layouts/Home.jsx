import React from 'react'
import Navbar from '../components/Navbar.jsx'
import FreeBooks from '../components/FreeBooks.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
        <Navbar/>
  <Banner/>
  <FreeBooks/>  
  <Footer/>
    </div>
  )
}

export default Home