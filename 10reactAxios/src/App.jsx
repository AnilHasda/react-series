import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
function App() {
  let [number, setNumber] = useState(0);
  let [fact,setFact]=useState("");
useEffect(()=>{
 (async ()=>{
let response=await axios.get(`http://numbersapi.com/${number}`);
setFact(response.data);
 })()
},[number])
  return (
    <>
      <h3>{number>=0?fact:"data will be display here"}</h3>
      <button onClick={()=>setNumber(number+1)}>increase</button>
      <button onClick={()=> number > 0 ? setNumber(number - 1) : setNumber(0)}>decrease</button>
    </>
  )
}

export default App
