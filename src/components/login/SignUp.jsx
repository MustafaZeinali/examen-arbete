import { useState } from "react"
import "../../style/login.css";

import registerUser from "../../api/user/registerUser"



const SignUp = () => {

    const [username , setUsername]= useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState(false)

    const styleMessage = {
        textAlign: "center",
        position: "fixed",
        top: "6em",
        fontWeight: "bold",
        fontSize: "1.6em",
        textAlign: "center",
        padding: ".2em"
    }


    const handleRegister = (e) => {
        e.preventDefault()
        const newUser = {
          username: username,
          password: password,
          email: email
        }
        console.log(newUser);
        const isRegister = registerUser(newUser);
        if(isRegister){
          console.log("register is succesfully");
          setMessage(true)
          setTimeout(() =>{
            setMessage(false)
        }, 9000)
          return true
    
        }else{
          console.log("register is not working" ,);
        }
    
        
      } 


      return(
        <>
       
        <form action="">
        <article className="login-form-container">
          {/* <h1 className="log-title">Register</h1> */}
          <section className="login-container">
            <div className="log-input-username">
              <label htmlFor="email"> E-mejl </label>
              <input className="log-username" type="e-mail" id="email" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="log-input-password">
              <label htmlFor="username">användernamn</label>
              <input className="log-password" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="log-input-password">
              <label htmlFor="-password">Lösenord</label>
              <input
                className="log-password"
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-btn">
              <button onClick={handleRegister}>registera</button>
            </div>
            
          
          </section>
        </article>
      </form>
      {message ? <p style={styleMessage}> du skapade konto</p> : ""}
      </>
      )




}
export default SignUp