import React from "react";
import { useState } from "react";
const Login=()=>{
    const [name,setName]=useState(" ");
    const handelchange=(event)=>{
        setName(event.target.value)
    }
    return(
        <>
        <form>
        <label>Name:</label>
        <input type="text" onChange={handelchange}></input>
        <br/>
        <br/>
        <label>Age:</label>
        <input type="text" />
        </form>
        <div>hello {name}</div>
        </>
    )
}
export default Login