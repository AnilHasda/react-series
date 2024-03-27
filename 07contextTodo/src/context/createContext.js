import React from "react";
import { useContext } from "react";
import { createContext } from "react";
let CreateContext = createContext({
    todos: [
        {
            message: "",
            id: ""
        }
    ],
    addTodo:(message)=>{},
    updateTodo:(id,message)=>{},
    deleteTodo:(id)=>{}
});
let ContextProvider = CreateContext.Provider;
export { ContextProvider };
export default function useData() {
    return useContext(CreateContext);
}