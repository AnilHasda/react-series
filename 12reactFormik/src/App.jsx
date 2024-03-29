import {useFormik} from "formik";
import { schema } from "./schema/schema";
function App() {
  const initialValues={
    name:"",
    email:"",
    password:"",
    cpassword:""
  }
 let {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
  validationSchema:schema,
    onSubmit:(values,action)=>{
      // console.log(values)
      console.log(values)
      action.resetForm();
    }
  })
  console.log(errors)
 return (
  <>
  <form action=""onSubmit={handleSubmit}>
    <label htmlFor="name">name</label><br/>
    <input type="text"placeholder="enter your name"id="name"name="name"autoComplete="off"
    value={values.name}
    onChange={handleChange}
    onBlur={handleBlur}
    />
    {errors.name && touched.name?<h3>{errors.name}</h3>:null}<br/>
    <label htmlFor="email">email</label><br/>
    <input type="email"placeholder="enter email"id="email"name="email"autoComplete="off"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.email && touched.email?<h3>{errors.email}</h3>:null}<br/>
    <label htmlFor="password">password</label><br/>
    <input type="password"placeholder="enter password"id="password"name="password"autoComplete="off"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
     {errors.password && touched.password?<h3>{errors.password}</h3>:null}<br/>
    <label htmlFor="cpassword">confirm_password</label><br/>
    <input type="password"placeholder="enter password again"id="cpassword"name="cpassword"autoComplete="off"
      value={values.cpassword}
      onChange={handleChange}
      onBlur={handleBlur}
    />
      {errors.cpassword && touched.cpassword?<h3>{errors.cpassword}</h3>:null}<br/>
    <br/>
    <button type="submit"name="submit">submit</button>
  </form>
  </>

 )
  
}

export default App
