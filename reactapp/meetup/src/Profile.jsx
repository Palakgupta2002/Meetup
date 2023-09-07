import React, { useState, useEffect } from "react";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    // Fetch the user's profile data
    fetch("http://localhost:5000/Profile")
      .then((response) => response.json())
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  }, []);

  return (
    <div>
      <button>See Profiles</button>
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p>Username: {userProfile.username}</p>
          <p>College: {userProfile.college}</p>
          <p>Email: {userProfile.email}</p>
          <p>Phone: {userProfile.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
