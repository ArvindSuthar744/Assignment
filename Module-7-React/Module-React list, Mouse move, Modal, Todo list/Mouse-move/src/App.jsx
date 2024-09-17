import { useState } from 'react'
import './App.css'
import ScollBox from './ScollBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      <h1>Mouse move using useState or useEffect Hook</h1>
      <ScollBox/>

      </div>
    </>
  )
}

export default App
