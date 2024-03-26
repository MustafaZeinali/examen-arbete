import { User } from "../models/user.js";
import express from "express";
import bcrypt from "bcrypt";
// import nodemailer from "nodemailer"
import  jwt  from "jsonwebtoken";
const router = express.Router();
const secret = "banana"
console.log("secret" ,secret);
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

  const {email} = req.body;
  // const theEmail = {email}

  //console.log("credentiala" , process.env.EMAIL_USER , process.env.EMAIL_PASSWORD);
 
  
  const salting = await bcrypt.genSalt(10);
  // validera input här
  const palintextPass = req.body.password;
  //console.log("register", palintextPass , salting);
  const hashpass = await bcrypt.hash(palintextPass, salting);

  // async function getIt (){
  //   let transporter = nodemailer.createTransport({
  //     service: "Gmail",
  //     host: "iamtester1221@gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASSWORD
  //     },
  //   })

  //  const url = "http://localhost:5173"

  //   const info = await transporter.sendMail({
  //     from: process.env.EMAIL_USER,
  //     to: email,
  //     subject: "Bekräfta konto",
  //     text: "hello world",
  //     html: `Click <a href= "${url}" > här </a> för att bekräfta ditt mejl`
  //   })
  //   console.log("message", info.messageId);
  // }

 
  try {
    const newUser = new User({
      username: req.body.username,
      password: hashpass,
      email: email
    });
    
  const createUser = await newUser.save();

 
    if (createUser ) {
      
      res.status(201).send({ message: `skickat a bekräftelse mejl to ${email}`, data: createUser });
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
      // console.log("fron login", UserPassValidate);
      const theTime = 3600 * 2;
    const payLoad = {userId : userLogin._id}
    let token = jwt.sign(payLoad , secret,{expiresIn: theTime});
    console.log("token" + token);
      res.json({ status:"success",message: "Login successful" , id: userLogin._id , token: token});
      
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
