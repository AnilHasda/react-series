import { useState } from 'react'

function App() {
  const [count, setCount] = useState("blueviolet");
  const bgChanger=(color)=>{
    setCount(color);
  }
  return (
   <div style={{background:count,height:"100vh",width:"100%"}}>
   <button style={{marginRight:"20px",backgroundColor:"red"}} onClick={()=>{bgChanger("red")}}>red</button>
   <button style={{marginRight:"20px",backgroundColor:"black",color:"#fff"}} onClick={()=>{bgChanger("black")}}>black</button>
   <button style={{marginRight:"20px",backgroundColor:"white"}} onClick={()=>{bgChanger("white")}}>white</button>
   <button style={{marginRight:"20px",backgroundColor:"green"}} onClick={()=>{bgChanger("green")}}>green</button>
   <button style={{marginRight:"20px",backgroundColor:"blue"}} onClick={()=>{bgChanger("blue")}}>blue</button>
   <button style={{marginRight:"20px",backgroundColor:"gold"}} onClick={()=>{bgChanger("gold")}}>gold</button>
   <button style={{marginRight:"20px",backgroundColor:"pink"}} onClick={()=>{bgChanger("pink")}}>pink</button>
   <button style={{marginRight:"20px",backgroundColor:"orange"}} onClick={()=>{bgChanger("orange")}}>orange</button>
   </div>
  )
}

export default App
