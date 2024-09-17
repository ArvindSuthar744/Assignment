import React from 'react'

function List() {

    const arr = [
                    {Id:1,name:"arvind"},
                    {Id:2,name:"vaibhav"}
                ]

  return (
    <div>
        <h3>Using Array.Map Funtion</h3>

        <h4>Show li unique key</h4>
        {arr.map((v,i)=>(
            <li key={i}>{v.name}</li>
        ))}

        <h4>Show Div unique key</h4>
        {arr.map((v,i)=>(
            <div key={i}>{v.name}</div>
        ))}
        <h4>Console No error </h4>

      
      
    </div>
  )
}

export default List
