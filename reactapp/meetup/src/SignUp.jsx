import React from "react";
import { useState } from "react";
import "./Signup.css";
import background from "./download.jpg";
const Signup = () => {
  const [form, setform] = useState({});
  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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
        const response = res.json();
        if (res.status === 200) {
          if (response === "True") {
            alert("User already exists");
          } else {
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
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="signupBox"
    >
      <div className="imageSection"></div>
      <div className="formSection">
        <form id="form" onSubmit={handleSubmit}>
          <label>Username</label>
          <br></br>
          <input
            className="inputbox"
            type="text"
            name="username"
            onChange={handlechange}
          ></input>
          <br></br>
          <label>College</label>
          <br></br>
          <input
            className="inputbox"
            type="text"
            name="college"
            onChange={handlechange}
          ></input>
          <br></br>
          <label>Email-id</label>
          <br></br>
          <input
            className="inputbox"
            type="email"
            name="email"
            onChange={handlechange}
          ></input>
          <br></br>
          <label>Phone no.</label>
          <br></br>
          <input
            className="inputbox"
            type="tel"
            name="phone"
            onChange={handlechange}
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            className="inputbox"
            type="text"
            name="password"
            onChange={handlechange}
          ></input>
          <br></br>
          <button className="button" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;