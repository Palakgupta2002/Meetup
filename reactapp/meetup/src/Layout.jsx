import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
        <nav>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            
            <Link to="/Login">
                <p>Login</p>
            </Link>
            <Link to="/Signup"> 
                <p>Signup</p>
            </Link>
        </div>
        </nav>
        </div>


        </div>
    );
}

export default Layout;
