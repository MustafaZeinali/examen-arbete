import { User } from "../models/user.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fetchData = await User.find({});
    if (!fetchData || fetchData.length === 0) {
      res.status(404).json("it is empty");
    } else {
      res.send(fetchData);
    }
  } catch (err) {
    req.status(500).send(err.message);
  }
});

router.post("/register", async (req, res) => {
  const salting = await bcrypt.genSalt(10);
  // validera input här
  const palintextPass = req.body.password;
  console.log("register", palintextPass , salting);
  const hashpass = await bcrypt.hash(palintextPass, salting);
  console.log("register 2 ");
  try {
    const newUser = new User({
      username: req.body.username,
      password: hashpass,
    });
    const createUser = await newUser.save();
    if (createUser) {
      res.json({ message: "user is created", data: createUser });
    } else {
      res.status(404).json({ error: "it is wrong with backend post router" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const reqPass = req.body.password;
    const userLogin = await User.findOne({ username: req.body.username });
    if (!userLogin) {
      console.log("User is not correct");
      res.status(400).send({ error: "it is wrong in user login" });
      return;
    }
    const UserPassValidate = await bcrypt.compare(reqPass, userLogin.password);
    if (UserPassValidate) {
      console.log("fron login", UserPassValidate);
      res.json({ message: "Login successful" });
      return;
    } else {
      console.log(UserPassValidate);
      return res.status(401).send({ error: "it is wrong password" });
    }
  } catch (err) {
    console.log(err, "Login failed");
    res.status(500).json({ err: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeUser = await User.findByIdAndDelete(id);
    if (removeUser) {
      res.json({ message: "user is delete" , status: "succes", removeUser: removeUser});
    } else {
      res.status(401).json({ message: "user is not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

export default router;
