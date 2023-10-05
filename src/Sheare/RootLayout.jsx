import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const RootLayout = () => {

  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       {/* <Footer></Footer>   */}
    </div>
  )
}

export default RootLayout
