import React, { useContext, useState } from "react";
import { ContextData } from "../context/context";
const Login=()=>{
    let [name,setName]=useState("");
    let {user,setUser}=useContext(ContextData);
    function verify(e){
        e.preventDefault();
        setName(user);
    }
    return(
        <>
        <input type="text"placeholder="enter your name"onChange={e=>setUser(e.target.value)}/><button type="submit"onClick={verify}>send</button> 
        <h2>{name?"welcome "+name:"please login"}</h2>
        </>
    )
}
export default Login;