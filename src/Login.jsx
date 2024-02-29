import "./login.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isOpen , setIsOpen] = useState(true)

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
                <input className="log-username" type="text" id="username" />
              </div>
              <div className="log-input-password">
                <label htmlFor="password">lösenord</label>
                <input className="log-password" type="text" id="password" />
              </div>
              <div className="login-btn">
                <button>logga in</button>
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
                <label htmlFor="username"> användernamn </label>
                <input className="log-username" type="text" id="username" />
              </div>
              <div className="log-input-password">
                <label htmlFor="password">lösenord</label>
                <input className="log-password" type="text" id="password" />
              </div>
              <div className="log-input-password">
                <label htmlFor="repeat-password">upprepa lösenord</label>
                <input
                  className="log-password"
                  type="text"
                  id="repeat-password"
                />
              </div>
              <div className="login-btn">
                <button>logga in</button>
              </div>
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
