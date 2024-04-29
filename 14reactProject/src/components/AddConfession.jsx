import React,{useState} from "react";
import "../assets/Addconfession.css";
import { FaLock } from "react-icons/fa";
import {database,set,update,ref,onValue} from "../config/connection"
export default function AddConfession(){
    let [input,setInput]=useState("");
    console.log(input)
    const addData=()=>{
        set(ref(database, 'users/' + Date.now()), {
            message:input
          }).then(error=>{
            if(error){
                console.log("error while adding data into database");
            }
            else{
                console.log("data added to the database");
            }
          })
    }
    return(
        <>
        <div className="main">
            <textarea className="message-section" row="8"col="85"placeholder="write your confessions here..." onChange={e=>setInput(e.target.value)}/>
            <button onClick={addData}>Confess</button>
        </div>
        <div className="security">
            <p><FaLock style={{ marginRight:"10px",color:"blueviolet"}}/>confessions will remains 24 hrs.</p>
        </div>
        </>
    )
}