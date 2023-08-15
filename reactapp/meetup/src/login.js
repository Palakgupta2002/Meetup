import React from "react";
import { useState } from "react";

export const Login = () => {
  
  const [user, setuser] = useState({});
  

  function handlechange(e) {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log(user);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/Login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
      if(res.status===200){
        localStorage.setItem("checklogin",true);
        
      }
      else{
        localStorage.setItem("checklogin",true);
        alert("npt correct");
      }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    
      <div style={{}}>
        {/* This is a Form  */}
        <p>Login</p>
      <form style={{}} onSubmit={handleSubmit}>
       <label>Username</label>
       <br></br>
        <input
          type="text"
          name="lusername"
          placeholder="Enter your username"
          onChange={handlechange}
        />
        <br></br>
        <label>Username</label>
       <br></br>
        <input
          type="text"
          name="lpassword"
          placeholder="Enter your Password"
          onChange={handlechange}
        />
        <br></br>
        <button type="submit">submit</button>
        
      </form>
      </div>
   
  );
};
export default Login;
