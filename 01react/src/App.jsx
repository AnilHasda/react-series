import React from "react";
import coding from"./assets/images/coding.jpeg";
export default function App({alt,data,list,doSomething}) {
  let {name,age}=data;
  console.log(doSomething)
  return (
    <>
    <h1 style={{color:"red",fontSize:"50px"}}>this is react first project </h1>
    this is my first react project
    <img src={coding}alt={alt}></img>
    <div className="banner"></div>
    <h3>Hello everyone I am {name} and I am {age} years old.</h3>
    <ul>
    {list.map(data=>{
return(
  <li>{data}</li>
)
    })}
    </ul>
    <button onClick={()=>{
      doSomething(5,5)
    }}>Click me</button>
    </>
  )
}

