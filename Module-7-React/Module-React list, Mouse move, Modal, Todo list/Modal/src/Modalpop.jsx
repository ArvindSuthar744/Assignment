import React, { useState } from 'react'
import { ModalDialog } from 'react-bootstrap'


function Modalpop() {
    const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={()=>{setShow(true)}}>Open</button>

      <ModalDialog isOpen={show}>
        <h3>Login Form</h3>
        <button onClick={()=>{setShow(false)}}>Show</button>
      </ModalDialog>
      <ModalDialog isOpen={show}>
        <h3>Registration Form</h3>
        <button onClick={()=>{setShow(false)}}>Show</button>
      </ModalDialog>
    </div>
  )
}

export default Modalpop