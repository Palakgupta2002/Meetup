import React, { useState, useEffect } from 'react';

export const Home = () => {
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
        {/* Display profiles */}
        <h2>User Profiles</h2>
        <ul>
          {profiles.map((profile, index) => (
            <li key={index}>{profile.username}</li>
          ))}
        </ul>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Home;
