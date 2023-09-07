import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Profiles")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>User Profiles</h2>
        <ul>
          {profiles.map((profile, index) => (
            <li key={index}>
              <p>{profile.username}</p>
              <ul>
                {profile.image &&
                  Array.isArray(profile.image) &&
                  profile.image.map((image, imageIndex) => (
                    <li key={imageIndex}>
                      {image !== null &&
                        image.data &&
                        image.contentType.startsWith("image/") && (
                          <>
                            <img
                              src={URL.createObjectURL(
                                new Blob([new Uint8Array(image.data.data)], {
                                  type: image.contentType,
                                })
                              )}
                              alt={`${profile.username}'s Image`}
                            />
                          </>
                        )}
                    </li>
                  ))}
                {profile.image !== null &&
                  Array.isArray(profile.image) &&
                  profile.image.map((pdf, pdfIndex) => (
                    <li key={pdfIndex}>
                      {/* Debugging */}
                      {pdf !== null &&
                        pdf.data &&
                        pdf.contentType === "application/pdf" && (
                          <>
                            {console.log(pdf.data.data, "ek ladaka pagal h")}
                            <iframe
                              title={`${profile.username}'s PDF`}
                              src={URL.createObjectURL(
                                new Blob([new Uint8Array(pdf.data.data)], {
                                  type: pdf.contentType,
                                })
                              )}
                              width="100%"
                              height="500"
                            ></iframe>
                          </>
                        )}
                    </li>
                  ))}
                {profile.image !== null &&
                  Array.isArray(profile.image) &&
                  profile.image.map((pdf, pdfIndex) => (
                    <li key={pdfIndex}>
                      {/* Debugging */}
                      {pdf !== null &&
                        pdf.data &&
                        pdf.contentType === "video/mp4" && (
                          <>
                            {console.log(pdf.data.data, "ek ladaka pagal h")}
                            <video
                              title={`${profile.username}'s Video`}
                              controls
                              width="100%"
                              height="500"
                            >
                              <source
                                src={URL.createObjectURL(
                                  new Blob([new Uint8Array(pdf.data.data)], {
                                    type: pdf.contentType,
                                  })
                                )}
                                type={pdf.contentType}
                              />
                              Your browser does not support the video tag.
                            </video>
                          </>
                        )}
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <nav style={{ display: "flex" }}>
        <Link to="Profile">
          <p>Profile</p>
        </Link>
        <Link to="Posts">
          <button>posts</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
