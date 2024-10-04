import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './action'


function App() {

    const count = useSelector(state=>state.xyz)
    const dispatch = useDispatch()
  return (
    <>
        <h1>Redux Counter App</h1>

        <h2>Count Num : {count}</h2> 

        <div className='btns'>
          <button onClick={()=>{dispatch(increment())}}>Increment (+)</button>
          <button onClick={()=>{dispatch(decrement())}}>Decrement (-)</button>
        </div>
      
    </>
  )
}

export default App
