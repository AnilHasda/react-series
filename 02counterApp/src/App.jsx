import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const addData=()=>{
    setCount(count+1);
  }
  const removeData=()=>{
    if(count>0){
    setCount(count-1);
    }
    else{
      setCount(0);
    }
  }
  return (
    <>
      <h3>hello this is our counter app</h3>
      value of counter:{count}<br /><br/>
      <button style={{marginRight:"30px"}} onClick={addData}>Increment</button>
      <button onClick={removeData}>Decrement</button>
    </>
  )
}

export default App
