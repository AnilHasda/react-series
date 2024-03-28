import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../slices/Slices";
export let CreateStore=configureStore({
reducer:todoReducer
})