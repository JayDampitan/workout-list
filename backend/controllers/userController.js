const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
const { name, email, password } = req.body;

if(!name || !email || !password ) {
    res.status(400)
    throw new Error("Please add all fiels")
}
    

  res.status(200).json({ message: "register user" });
});


const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login user" });
});

module.exports = { registerUser, loginUser };
