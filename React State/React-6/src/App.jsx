import { useState } from 'react'
import "./App.css"

function App() {
  let [count, setCount] = useState(0)

  function handleClick(){
    setCount(++count);
  }

  return (
    <>
      <button onClick={handleClick}>{count}</button>
    </>
      
  )
}

export default App
