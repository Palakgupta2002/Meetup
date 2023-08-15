import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  
 const loggedin=localStorage.getItem("checklogin");
    return (
      <>
      {
        loggedin?<div><nav> 
          <li>
              <Link to="/home">Home</Link>
          </li>
            </nav></div>:
           <div>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li>
              <Link to="/SignUp">Signup</Link>
            </li>
            <li>
              <Link to="/Login" >Login</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
        

      }
      </>
    );
  }
  
    
 

export default Layout;
