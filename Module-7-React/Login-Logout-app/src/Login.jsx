import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

function Login() {
  return (
    <div className='login'>
        <Navbar btnName1="Login"/>
        <Content content2="Login"/>
        <Footer/>
      
    </div>
  )
}

export default Login
