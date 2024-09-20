import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home() {

  const [students,setStudents] = useState()
  const nav = useNavigate()

  useEffect(()=>{

    fetch('http://localhost:5005/Students')
    .then((res)=>{ return res.json() })
    .then((data)=>( setStudents(data) ))

  })
    const handleView =(id) =>{
      
      nav(`/view/${id}`)
    }
    const handleDelete =(id) =>{
      console.log(id)
        fetch(`http://localhost:5005/Students/`+id,{
          method:"delete",
          headers:{"content-type":"application/json"}
        })
    }

 

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <div className="row alian-item-center justify-content-center">
          <div className="col-xl-6 border border-dark">
            <div>
              <Link to='/adduser' className="btn btn-warning my-2">Add New</Link>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr >
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody> 
                 {students && students.map((v,i)=>(
                     <tr key={v.id}>
                     <th scope="row">{i+1}</th>
                     <td>{v.name}</td>
                     <td>{v.email}</td>
                     <td>
                       <Link to={`/view/${v.id}`} className="btn btn-info">View</Link>
                       
                       {/* <button onClick={()=>{handleView(v.id)}} className="btn btn-info"> View </button> */}
                       <Link  to={`/edit/${v.id}`} className="btn btn-success mx-2">Edit</Link>
                       <button onClick={()=>{handleDelete(v.id)}} className="btn btn-danger">Delete</button>
                     </td>
                   </tr>
                 ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
