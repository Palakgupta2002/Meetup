const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Connected to MongoDB");
}

// Define schema first
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  college:String,
  email:String,
  phone:String,

});

// Create model using schema
const User = mongoose.model('user', userSchema);

//This is for to connect a two localhost to each other like gateway
server.use(cors());
server.use(bodyParser.json());
server.get('/',(res,req)=>{
  req.send("hello");
})

//This is for Signup
server.post('/Signup', async (req, res) => {
  try {
    const username = req.body.username;
    
    // Check if the user already exists in the database
    const user = await User.findOne({ username: username });
    
    if (user) {
      res.send("User already exists");
    } else {
      // Create a new user and save to the database
      let newUser = new User();
      newUser.username = req.body.username;
      newUser.password = req.body.password;
      newUser.college = req.body.college;
      newUser.email = req.body.email;
      newUser.phone = req.body.phone;
      
      const doc = await newUser.save();
      res.json(req.body);
    }
  } catch (error) {
    console.error("Error inserting user data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

//This is for Login
// This is for Login
server.post('/Login', async (req, res) => {
  try {
    const { lusername, lpassword } = req.body;

    // Find the user with the provided username
    const user = await User.findOne({ username: lusername });

    // Check if the user exists and the password matches
    if (user && user.password === lpassword) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
//This is for to profiles
server.get('/Profiles',async(req,res)=>{
  try{
      const users=await User.find({},'username');
      res.status(200).json(users);

  } 
  catch(err){
    console.error("Error fetching profiles:", err);
    res.status(500).json({ error: "An error occurred" });

  }
})



//This is default
server.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});


server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

