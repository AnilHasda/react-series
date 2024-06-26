import { createSlice, nanoid } from "@reduxjs/toolkit";
let local = localStorage.getItem("item")
let response = JSON.parse(local);
let initialState =
{
    todo: (response) ? response : []
}
export let createSlices = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let data = {
                id: nanoid(),
                item: action.payload.item
            }
            state.todo.push(data);
            localStorage.setItem("item", JSON.stringify(state.todo));

        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(data => action.payload !== data.id);
            localStorage.setItem("item", JSON.stringify(state.todo));
        },
        updateTodo: (state, action) => {
          alert(action.payload.id)
        }
    }
})
export const { addTodo, updateTodo, deleteTodo } = createSlices.actions;
export default createSlices.reducer;

