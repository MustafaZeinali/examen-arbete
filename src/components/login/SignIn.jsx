import "../../style/login.css";
import userLogin from "../../api/user/loginUser";
import { useState ,useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ConfiContext } from "../../routeConfi/ContextConfi";
const SignIn = () => {
    //<main   style={{display: isOpen ? "" : "none"}} className="log-parent-container"></main>
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {isLogined , setIsLogined} = useContext(ConfiContext)
    
 console.log("islogined from sign in", isLogined);
    const handleLogin = async(e) => {
        e.preventDefault()
        const statusLogin = await userLogin(username, password)
        console.log("statusLogin",statusLogin);
        if(statusLogin.login === "success"){
            sessionStorage.getItem("jwt")
          console.log("login success",statusLogin);
          setIsLogined(!isLogined)
          navigate("/")
        }else{
          console.log("login error",statusLogin);
        }
      }


    return(
      <>
      
            <form action="">
              <article className="login-form-container">
               
                {/* <h1 className="log-title"> Inloggning </h1> */}
                <section className="login-container">
                  <div className="log-input-username">
                    <label htmlFor="username"> användernamn </label>
                    <input className="log-username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="log-input-password">
                    <label htmlFor="password">lösenord</label>
                    <input className="log-password" type="text" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="login-btn">
                    <button onClick={handleLogin}>logga in</button>
                  </div>
                  
                </section>
              </article>
            </form>
            </>
          )
    }
   
export default SignIn    
