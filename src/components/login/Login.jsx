import "../../style/login.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import registerUser from "../../api/user/registerUser";
import userLogin from "../../api/user/loginUser";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
   const [showLoginForm, setShowLoginForm] = useState(true);
   const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isOpen , setIsOpen] = useState(true)
  // const [username , setUsername] = useState("");
  // const [password , setPassword] = useState("");
  // const [email , setEmail] = useState("")
  // const [message, setMessage] = useState(false);

  const clickShowLogin = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(!showLoginForm);
  }
  //   console.log("click show login form");
  
  const clickShowRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    console.log("click show register form");
  };

  const clickCloseForm = () => {
    setIsOpen(false);
    console.log('it is closed ');
  }; 

  // const handleUser = (e) => {
  //   setUsername(e.target.value)
  // }
  // const handlePass = (e) => {
  //   setPassword(e.target.value)
  // }

  // const handleRegister = () => {
  //   const newUser = {
  //     username: username,
  //     password: password,
  //     email: email
  //   }
  //   console.log(newUser);
  //   const isRegister = registerUser(newUser);
  //   if(isRegister){
  //     console.log("register is succesfully");
  //     setMessage(true)
  //     return true

  //   }else{
  //     console.log("register is not working" ,);
  //   }


  // } 

  // const handleLogin = async(e) => {
  //   e.preventDefault()
  //   const statusLogin = await userLogin(username, password)
  //   console.log("statusLogin",statusLogin);
  //   if(statusLogin.login === "success"){
  //     console.log("login success",statusLogin);
  //   }else{
  //     console.log("login error",statusLogin);
  //   }
  // }

  const styleForm= {
    border: "solid 1px red",
    fontSize: "1.5em"

  }

  return (
    <>
    <div className="log-parent-container">
      <div className="log-log-form" >
      <span  className="log-close-icon" onClick={clickCloseForm} ><IoClose/></span>
        <p className="title-log"> <span onClick={clickShowRegister} style={showRegisterForm? styleForm : null} >Registera</span> <span onClick={clickShowLogin} style={showLoginForm? styleForm : null}>Inlogning</span></p>
      
       {showRegisterForm? <SignUp/> : ""} 
        
      {showLoginForm? <SignIn/> : ""}  
      </div>
    
    
    </div>
    </>
  )
};
export default Login;
