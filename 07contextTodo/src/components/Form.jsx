import React, { useState } from "react";
import useData from "../context/createContext";
export default function Form() {
  let [todo, setTodo] = useState([]);
  let { addTodo } = useData();
  function addItem(e) {
    e.preventDefault();
    addTodo(todo);
    setTodo(" ");
  }
  return (
    <>
      <form action=""style={{marginLeft:"40%",marginBottom:"50px",marginTop:"50px"}}>
        <input type="text" placeholder="enter items"value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit" onClick={addItem}>Add items</button>
      </form>
    </>
  )
}