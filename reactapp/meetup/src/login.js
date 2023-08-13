import React from "react";
import { useState } from "react";
import image from './images (1).jpg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";




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
    <div style={{display:"flex",
                justifyContent:"center",
                alignItems:"center",
                
                }} >
      <div  style={{width: "30%", height: "auto", maxHeight: "700px", overflow: "hidden" }}>
        {/* This is a slider image portion */}
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image} className="sliderimg"/>
      <img src={image} className="sliderimg"/>
      <img src={image} className="sliderimg"/>
      <img src={image} className="sliderimg"/>
</AliceCarousel>

      </div>
      <div style={{
                  backgroundColor:"rgb(167,197,107)"}}>
        {/* This is a Form  */}
        <p>Login</p>
      <form style={{}} onSubmit={handleSubmit}>
        <span>username</span>
        <input
          type="text"
          name="lusername"
          placeholder="Enter your username"
          onChange={handlechange}
        />
        <br></br>
        <span>password</span>
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
    </div>
  );
};
export default Login;
