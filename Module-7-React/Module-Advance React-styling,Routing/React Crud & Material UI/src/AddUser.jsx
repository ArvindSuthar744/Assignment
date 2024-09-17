import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const navigate = useNavigate();
  const [store,setStore] = useState();
  const check = name === "" || email === ""


  useEffect(()=>{

    fetch('http://localhost:5005/Students')
    .then((res)=>{ return res.json() })
    .then((data)=>( 
      setStore(data)
    ))
  },[])

  // console.log(store) 
   

    

    

  const handleSubmit = (e)=>{

      e.preventDefault();
      const jsonData = {name,email};
      // console.log({name,email});
 

    const x = store.find(s=>s.email == email)
    console.log(x)


      // const check = (jsonData.name == "" || jsonData.email == "")? "t" : "f"
    if(x)
    {
      alert("sdfsdf")
    }
    else 
    {
      fetch('http://localhost:5005/Students',{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(jsonData)
      })
      .then((res)=>{
        if(res)
        {
            alert('Record inserted..!');
            navigate('/')
        }
      })
    }
      

        


  }

  return (
    <div>
      <h1>Add User</h1>
      <div className="container">
        <div className="row text-start justify-content-center">
          <div className="col-xl-6 w-50">
            <div>
              <Link to="/" className="btn btn-warning my-2">Go back</Link>
            </div>
            <div>
              <form onSubmit={handleSubmit}>

              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                  <input type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className="form-control border border-dark"
                    id="exampleInputPassword1"/>
                </div>
            
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="text"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control border border-dark"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
            
                <button type="submit" disabled={check} className="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser
