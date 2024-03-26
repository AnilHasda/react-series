import React, { useState } from "react";
import { ContextData } from "../context/context";
const ContextProvider=({children})=>{
    let[user,setUser]=useState("");
    return(
        <ContextData.Provider value={{user,setUser}}>
           {children}
        </ContextData.Provider>
    )
}
export default ContextProvider;