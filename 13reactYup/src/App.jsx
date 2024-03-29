import * as yup from "yup";
function App() {
  const handleSubmit=async (e)=>{
    e.preventDefault()
  let formData={
    name:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value,
    cpassword:e.target[3].value,
  }
  let schema=yup.object({
    name:yup.string().min(3).max(20).required("this is required field"),
    email:yup.string().email().required("this is required field"),
    password:yup.string().min(6).max(30).required("this is required filed"),
    cpassword:yup.string().oneOf([yup.ref("password"),null],"password must match")
  })
let result=await schema.isValid(formData);
  if(result){
    alert("your account has been created");
  }
  else{
    alert("please enter valid data");
  }
  }
  return (
    <>
      <form action=""style={{margin:"auto",backgroundColor:"",width:"20%"}} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br />
        <input type="text" placeholder="enter your name" name="name" id="name" autoComplete="off" /><br /><br/>
        <label htmlFor="email">Email</label><br />
        <input type="text" placeholder="enter your email" name="email" id="email" autoComplete="off" /><br /><br/>
        <label htmlFor="password">Password</label><br />
        <input type="text" placeholder="enter password" name="password"id="password" autoComplete="off" /><br /><br/>
        <label htmlFor="cpassword">Confirm_Password</label><br />
        <input type="text" placeholder="retype password" name="cpassword" id="cpassword"autoComplete="off" /><br /><br/>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default App
