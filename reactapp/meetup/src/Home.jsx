// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const Home = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Profiles")
            .then(response => response.json())
            .then(data => {
                setProfiles(data);
            })
            .catch(error => {
                console.error("Error fetching profiles:", error);
            });
    }, []);

    return (
        <div>
            <div>
                <h2>User Profiles</h2>
                <ul>
                    {profiles.map((profile, index) => (
                        <li key={index}>{profile.username}</li>
                    ))}
                </ul>
            </div>
            <nav>
                <Link to="Profile">
                    <p>Profile</p>
                </Link>
            </nav>
           
            <Outlet />
        </div>
    );
}

export default Home;
