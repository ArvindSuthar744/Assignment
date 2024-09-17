import React from 'react'
import TodoDeleteEdit from './TodoDeleteEdit';

function TodoDisplay({Todos,onChangeT,onDeleteT}) {

    // console.log("CHECK-2", Todos);

  return (
          <>
            <div className='display-section'>
                {Todos.map((v)=>
                  (   <li key={v.id}>
                        {/* <h2>{v.name}</h2> */}
                        <TodoDeleteEdit todo={v} onchange={onChangeT} ondelete1={onDeleteT}/>
                      </li>
                  )
                )}
            </div>
            </>
          )
}


export default TodoDisplay
