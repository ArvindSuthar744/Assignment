import { useState } from 'react'
import './App.css'
import {ModalDialog} from 'react-bootstrap'
import Modal1 from './Modal1'
function App() {
  const [show, setShow] = useState(false)

  const handleshow = () => {
    setShow(true)
  }

  return (
    <>
      <div className='modal'>
        <h1>Modal using Login and Registration Form</h1>
        <div>
          <button onClick={handleshow}>Login Open</button>

          <Modal1 isOpen={show} >

            <ModalDialog isOpen={show}>
              <form action="">
              <div className="modal">
              <div className='modal-header'>
              <h3>Login To My Account</h3>
              <button onClick={() => { setShow(false) }}>X</button>
              </div>
                <div className='input-div'>
                  <input type="text" placeholder='Email Address' className='inp'/>
                  <input type="text" placeholder='Password' className='inp'/>
                  <div className='input-inner'>
                    <input type="checkbox" id="check1" />
                    <h6>Remember Me on This Computer</h6>
                  </div>
                  <button className='login-btn'>LOGIN</button>
                </div>
                <div className='footer'>
                  <button className='btn'>Forget your Password?</button>
                  <button className='btn'>Create A New Account</button>
                </div>
                </div>
              </form>
            </ModalDialog>

          </Modal1>

        </div>
      </div>
    </>
  )
}

export default App
