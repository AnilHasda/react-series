import { useState } from "react";
import { database, set, update, ref, onValue } from "./config/firebase";
function App() {
  let [inputs, setInputs] = useState({});
  const getData = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const handleForm = (e) => {
    e.preventDefault();
    insertData();
  }
  const insertData = () => {
    set(ref(database, 'users/' + Date.now()), {
      ...inputs
    }).then(error=>{
      if(error){
        console.log("error while inserting data");
      }
      else{
        console.log("data successfully inserted");
      }
    })
  }
  return (
    <>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="name" placeholder="enter your name" required autoComplete="off" style={{ marginBottom: "20px" }} onChange={getData} /><br />
        <input type="email" name="email" placeholder="enter your email" required autoComplete="off" onChange={getData} /><br /><br />
        <button type="submit">submit</button>
      </form>
      <h2>name:{inputs.name}     email:{inputs.email}</h2>
    </>

  )
}

export default App
