import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddUser from './AddUser'
import View from './View'
import Edit from './Edit'
import 'bootstrap/js/dist/base-component'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  
  
  
  // Install command
  // npm i react-router-dom
  // npm i bootstrap react-bootstrap
  // npm i -g json-server  (anyname.json)
  // Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  // json-server --watch anyname.json --port 5000
 
    // Bootstrap import and use
  // import "../node_modules/bootstrap/dist/css/bootstrap.css";



  return (
    <>
      <div className='app'>
        <h1>React Routing and Json Server</h1>

      <BrowserRouter>
      <div >
      <Link to="/" className="btn btn-primary px-3"> / Home</Link>
      </div>
      {/* <Link to="/view/:viewId">View</Link>
      <Link to="/edit/:editId">Edit</Link> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/adduser" element={<AddUser/>}></Route>
          <Route path="/view/:viewId" element={<View/>}></Route>
          <Route path="/edit/:editId" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
