import React from 'react'

function Navbar(props) {
  return (
    <div className='nav'>
      <h1>Navigation</h1>
      <button className='btn'>{props.btnName1} {props.btnName2}</button>
    </div>
  )
}

export default Navbar
