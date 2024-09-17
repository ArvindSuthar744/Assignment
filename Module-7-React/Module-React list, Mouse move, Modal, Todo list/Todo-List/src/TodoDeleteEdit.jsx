import React, { useState } from 'react'

function TodoDeleteEdit({todo,onchange,ondelete1}) {

    // console.log("v",todo,onchange,ondelete1)
    // console.log("v",todo)
    // console.log(onchange)
    // console.log(ondelete1)

    const [edit,setedit] = useState(false);

    let content ;
    if(edit){
        content = 
        <>
            <input type="text" id='todo-li'
            value={todo.name}
            onChange={(e)=>{
                onchange({
                        ...todo,
                        name:e.target.value
                })
            }}
            />

            <button id='save' onClick={()=>{setedit(false)}} >Save</button>
        </>
    }
    else{
        content = 
        <>
            {todo.name} 
            {/* <p id='todo-li'> {todo.name}</p> */}
            <button id='edit' onClick={()=>{setedit(true)}}>Edit</button>
        </>
    }


  return (
        <>
            <div className='cruds' >
                <h2>{content}</h2>
                <button onClick={()=>{ ondelete1(todo.id)}} >Delete</button>

            </div>
        </>
  )
}

export default TodoDeleteEdit
