import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'

function View() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const {viewId} = useParams();

  useEffect(()=>{
      fetch(`http://localhost:5005/Students/${viewId}`)
      .then((res)=>{return res.json()})
      .then((data)=>{
          setName(data.name)
          setEmail(data.email)
      })
    })

    console.log(viewId)
    console.log(name)
    console.log(email)


return (
  <div className='container  mt-5'>

    <h3>Id : {viewId} </h3>
    <h3>Name :{name}</h3>
    <h3>Email : {email} </h3>

  </div>
);
}

export default View