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
       res.status===200?alert("login succesfully"):alert("Fail")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        

      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <span>username</span>
        <input
          type="text"
          name="lusername"
          placeholder="Enter your username"
          onChange={handlechange}
        />
        <span>password</span>
        <input
          type="text"
          name="lpassword"
          placeholder="Enter your Password"
          onChange={handlechange}
        />
        <button type="submit">submit</button>
      </form>
      </div>
    </div>
  );
};
export default Login;
