// RouterMeetup.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Layout from "./Layout";
import Home from "./Home";
import Profile from "./Profile";
import Posts from "./Posts";
import Signup from "./Signup";
import context from "./context";
const RouterMeetup = () => {
  const [globalEmail, setGlobalEmail] = useState(null);
  return (
    <context.Provider
      value={{ setGlobalEmail: setGlobalEmail, globalEmail: globalEmail }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Home" element={<Home />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="Posts" element={<Posts />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default RouterMeetup;
