import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./login";
import Layout from "./Layout";
import Home from "./Home";


import "./index.css";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout  />}>
          <Route index element={<SignUp/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
