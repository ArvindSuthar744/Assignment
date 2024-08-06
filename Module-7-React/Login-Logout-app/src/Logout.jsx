import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

function Logout() {
  return (
    <div className='logout'>
        <Navbar btnName2="Logout"/>
        <Content content2="Logout"/>
        <Footer/>
    </div>
  )
}

export default Logout
