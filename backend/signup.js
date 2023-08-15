import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function handlechange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/Signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (res) => {
        const response = await res.json(); // Parse the response JSON
  
        if (res.status === 200) {
          // Check the response content to determine success or fail
          if (response === "User already exists") {
            alert("User already exists");
          } else {
            navigate("/home")
           
          }
        } else {
          alert("Fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  return (
    <div style={{}}>
      <form id="form"  onSubmit={handleSubmit}>
        <label>Username</label>
        <br></br>
        <input className="inputbox" type="text" name='username' onChange={handlechange}></input>
        <br></br>
        <label>College</label>
        <br></br>
        <input className="inputbox" type='text' name='college' onChange={handlechange}></input>
        <br></br>
        <label>Email-id</label>
        <br></br>
        <input className="inputbox" type='email' name='email' onChange={handlechange}></input>
        <br></br>
        <label>Phone no.</label>
        <br></br>
        <input className="inputbox" type='tel' name='phone' onChange={handlechange}></input>
        <br></br>
        <label>Password</label><br></br>
        <input className="inputbox" type='text' name='password' onChange={handlechange}></input>
        <br></br>
        <button className='button' type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Signup;
