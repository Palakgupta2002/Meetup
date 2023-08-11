import React, { useState } from 'react';

const Signup = () => {
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
      .then((res) => {
        res.status(200) ? alert("Success") : alert("Fail");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
