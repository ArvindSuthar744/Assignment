import React, { useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoDisplay from './TodoDisplay';

let index = 3;

function Todos() {


    const [todos, settodos] = useState([
        { id:1, name: "Sample1"},
        { id:2, name: "Sample2"},
    ]);
    
      console.log("CHECK*1", Todos);
    
    const HandleAdd = (name) => {
        console.log("AddName",name);
        console.log("index", todos);
        settodos(
            [
                ...todos,
                { id: index++ , name: name }
            ]);
    };
    
    const HandleEdit = (editdata) => {
            
        console.log("edit",editdata.id)
      settodos(
          todos.map((v) => {
          if (v.id === editdata.id) {
            return editdata;
          } 
          else {
            return v;
          }
        })
      )
    };

    const HandleDelete = (todoid) => {
       console.log("deleteId",todoid)
      settodos(
          todos.filter((v) => {
            return v.id !== todoid;
          })
      );

    };
    

  return (
    <div>
      <div className='main'>
            <h1>Todo App</h1>
            <TodoAdd TextAdd={HandleAdd}/>
            <TodoDisplay Todos={todos} 
            onChangeT={HandleEdit}
            onDeleteT={HandleDelete}  />
      </div>
    </div>
  )
}

export default Todos