import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer'
import StickyNavbar from '../components/shared/StickyNavbar/StickyNavbar'

const Layout = () => {
  return (
    <>
    <StickyNavbar></StickyNavbar>
     <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default Layout