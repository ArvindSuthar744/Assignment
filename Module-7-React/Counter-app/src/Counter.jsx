import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
 
    const Counter1 = () => {
       setCount(count + 1);
    }
    const Counter2 = () => {
        setCount(count - 1);
    }

  return (
    <div>
         <div className="count-div">

          <h1 className="h1">Counter App</h1>
          <h1 className='output'>{count}</h1>

          <div className="count-inner-div">
            <button className='increment'onClick={Counter1}>Increment</button>
            <button className='decrement'onClick={Counter2}>Decrement</button>
          </div>
        </div>
    </div>
    
  )
}

export default Counter
