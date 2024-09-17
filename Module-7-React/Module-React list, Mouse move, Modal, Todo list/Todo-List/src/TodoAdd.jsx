import React ,  { useState } from 'react'

function TodoAdd({TextAdd}) {

    const [Text,setText] = useState('');

  return (
    
    <>
    <div className='input-section'>
          <input type="text" id='inp1' value={Text} 
            onChange={(e)=>{
              setText(e.target.value);
            }}
          />
          
          <button id='add-btn'
          onClick={()=>{
              TextAdd(Text)
              setText("");
          }}
          >+</button>

    </div>
    </>
    
  )
}

export default TodoAdd
