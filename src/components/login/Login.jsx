import "../../style/login.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import registerUser from "../../api/user/registerUser";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isOpen , setIsOpen] = useState(true)
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  const clickShowLogin = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(!showLoginForm);

    console.log("click show login form");
  };
  const clickShowRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    console.log("click show register form");
  };

  const clickCloseForm = () => {
    setIsOpen(false);
    console.log('it is closed ');
  }; 

  const handleUser = (e) => {
    setUsername(e.target.value)
  }
  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = () => {
    const newUser = {
      username: username,
      password: password
    }
    const isRegister = registerUser(newUser);
    if(isRegister){
      return true
    }else{
      console.log("register is not working");
    }


  } 

  return (
    <main   style={{display: isOpen ? "" : "none"}} className="log-parent-container">
      {showLoginForm ? (
        <form action="">
          <article className="login-form-container">
           <span onClick={clickCloseForm}  className="log-close-icon"  ><IoClose/></span>
            <h1 className="log-title"> Inloggning </h1>
            <section className="login-container">
              <div className="log-input-username">
                <label htmlFor="username"> användernamn </label>
                <input className="log-username" type="text" id="username" value={username} onChange={handleUser} />
              </div>
              <div className="log-input-password">
                <label htmlFor="password">lösenord</label>
                <input className="log-password" type="text" id="password" value={password}  onChange={handlePass}/>
              </div>
              <div className="login-btn">
                <button >logga in</button>
              </div>
              <div>
                <p>
                  har du inget konto?
                  <span className="skapa-konto" onClick={clickShowRegister}>
                    {" "}
                    skapa konto
                  </span>
                </p>
              </div>
            </section>
          </article>
        </form>
      ) : (
        <form action="">
          <article className="login-form-container">
            <h1 className="log-title">Register</h1>
            <section className="login-container">
              <div className="log-input-username">
                <label htmlFor="username"> E-mejl </label>
                <input className="log-username" type="text" id="username" />
              </div>
              <div className="log-input-password">
                <label htmlFor="password">användernamn</label>
                <input className="log-password" type="text" id="password" />
              </div>
              <div className="log-input-password">
                <label htmlFor="repeat-password">Lösenord</label>
                <input
                  className="log-password"
                  type="text"
                  id="repeat-password"
                />
              </div>
              <div className="login-btn">
                <button onClick={handleRegister}>registera</button>
              </div>
              {handleRegister() ? <p> du skapade konto</p> : "null"}
              <div>
                <p>
                  har du redan konto?
                  <span className="skapa-konto" onClick={clickShowLogin}>
                    {" "}
                    Logga in
                  </span>
                </p>
              </div>
            </section>
          </article>
        </form>
      )}
    </main>
  );
};
export default Login;
