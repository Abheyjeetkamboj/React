import React from 'react'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />3
    <Footer />
    </>
  )
}

export default Layout