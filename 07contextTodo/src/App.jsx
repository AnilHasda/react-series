import { useEffect, useState } from "react";
import Form from "./components/Form";
import { ContextProvider } from "./context/createContext";
function App() {
  let [todos, setTodos] = useState([]);
  const addTodo = (item) => {
    let data = {
      id: Date.now(),
      item: item,
      toggleComplete: false
    }
    setTodos(prev => [...prev, data])
  }
  const updateTodo = (id, item) => {

  }
  const deleteTodo = (id) => {
    let filterData = todos.filter((data) => data.id !== id);
    setTodos(filterData);
  }
  //toggle complete check function created here
  const checkToggle = (id) => {
    setTodos(prev => prev.filter(data => data.id === id ? {...data,name:"sarkarHasda"} : data))
    console.log(todos)
  }
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todos"));
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <ContextProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <Form />
      <table border="1" width="50%" style={{ margin: "auto", textAlign: "center", borderCollapse: "collapse" }}>
        {todos.map((data, index) =>
          <>
            <tr key={data.id}><td><input type="checkbox" onClick={() => { checkToggle(data.id) }} /></td><td><input type="text" value={data.item} style={{ border: "none", outline: "none",/*textDecoration:(toggle===true)?"line-through":"none"*/ }} disabled /></td><td colSpan="2"><button style={{ marginRight: "20px" }}>edit</button><button onClick={() => { deleteTodo(data.id) }}>delete</button></td></tr>
          </>
        )}
      </table>
    </ContextProvider>
  )
}

export default App
