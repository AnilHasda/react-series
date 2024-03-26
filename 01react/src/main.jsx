import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
function doSomething(a,b){
  let sum=a+b;
  alert("sum of a and b="+sum);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App alt="coding-image--for---coder" data={{name:"anil",age:22}} list={[1,2,3,4,5]} doSomething={doSomething}/>
  </React.StrictMode>
)