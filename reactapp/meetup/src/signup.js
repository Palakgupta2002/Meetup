import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({});

  function handlechange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/Signup", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        "Content-type": 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);    
    console.log(response);
    if(result)
    alert("succesfully signup");
  else
  alert("error")
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <span>username </span>
        <input type="text" name='username' onChange={handlechange}></input>
        <span>password</span>
        <input type='text' name='password' onChange={handlechange}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Signup;
