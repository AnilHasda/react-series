import * as Yup from "yup";
export const schema=Yup.object({
    name:Yup.string().min(2).max(30).required("please enter your name"),
    email:Yup.string().email().required("please enter email"),
    password:Yup.string().min(6).required("please enter password"),
    cpassword:Yup.string().oneOf([Yup.ref("password"),null],"passowrd must match").required("please enter password")

})