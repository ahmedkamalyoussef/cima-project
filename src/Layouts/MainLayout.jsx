import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function MainLayout() {
  return (
    <>
    <div className='content'>
      <Navbar/>
      <Outlet/>
    </div>
      <Footer/>
    </>
  )
}
export default MainLayout
