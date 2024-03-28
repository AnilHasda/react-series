
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./slices/Slices";
import { useState } from "react";
function App() {
  let [updateid, setUpdateid] = useState(" ")
  let [btnName, setBtnName] = useState("add item");
  let [input, setInput] = useState("");
  let data = useSelector(state => state.todo);
  let dispatch = useDispatch();
  const addItems = (e) => {
    e.preventDefault();
    if (btnName === "add item") {
      dispatch(addTodo({ item: input }));
      setInput(" ");
    }
    if (btnName === "update item") {
      alert("i am clicked");
      // changeUpdate();
      // setBtnName("add item");
      setInput(" ");
    }
  }
  const update = (id) => {
    let resp = data.filter((ele) => ele.id === id);
    setInput(resp[0].item);
    setBtnName("update item")
    setUpdateid(id);
  }
  const changeUpdate = () => {
    alert("update function called")
    dispatch(updateTodo({ id: updateid, item: input }));
  }
  return (
    <>
      <form onSubmit={() => { addItems(); }}>
        <input type="text" placeholder="add items" value={input || " "} onChange={e => setInput(e.target.value)} /><button type="submit">{btnName}</button>
      </form>
      <table width="50%">
        <tbody>
          {data.map(element => {
            return <>
              <tr key={element.id}><td>{element.item}</td><td colSpan="2"><button onClick={() => { update(element.id) }}>edit</button><button onClick={() => { dispatch(deleteTodo(element.id)) }}>delete</button></td></tr>
            </>
          })}
        </tbody>
      </table>
    </>
  )
}

export default App;
