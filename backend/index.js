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
  password: String
});

// Create model using schema
const User = mongoose.model('user', userSchema);

server.use(cors());
server.use(bodyParser.json());
server.get('/',(res,req)=>{
  req.send("hello");
})

server.post('/Signup', async (req, res) => {
  try {
    let newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    const doc = await newUser.save();
    console.log(doc);
    console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error("Error inserting user data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});


//This is default
server.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});


server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

