import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Body