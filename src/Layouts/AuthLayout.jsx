import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function AuthLayout() {
  return (
    <>
      <Navbar auth={true}/>
      <div className="w-50 m-auto my-5 content">
          <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default AuthLayout
