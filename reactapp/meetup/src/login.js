import React from 'react'
import { useState } from 'react'

export const Login = () => {
    const [user,setuser]=useState({});
    function handlechange(e) {
        setuser({
          ...user,
          [e.target.name]: e.target.value
        });
        e.preventDefault();
        console.log(user)
      }
      const handleSubmit= async(e)=>{
      e.preventDefault();
      const response= await fetch("http://localhost:5000/",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
        });
        
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <span>username</span>
            <input type='text' name="username" placeholder='Enter your username' onChange={handlechange}/>
            <span>password</span>
            <input type='text' name="password" placeholder='Enter your Password' onChange={handlechange}/>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
export  default Login 
