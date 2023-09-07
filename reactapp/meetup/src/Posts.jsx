import React, { useContext, useState } from "react";
import context from "./context";
const Posts = () => {
  const [image, setImage] = useState(null);
  const { globalEmail } = useContext(context);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(globalEmail,'globalemail')
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("email", globalEmail);
    try {
      const response = await fetch("http://localhost:5000/CreatePost", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Post created successfully");
      } else {
        alert("Post creation failed");
        console.log(await response.text());
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred");
    }
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Posts;
