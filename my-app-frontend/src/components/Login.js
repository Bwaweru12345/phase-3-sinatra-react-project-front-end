import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Display from "./Display";


const Login = ({onLogin}) => {

  // let navigate = useNavigate()

  let [loggedIn, setLoggedIn] = useState(false);

  let [email, SetEmail] = useState("");
  let [password, SetPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://meme-generator-backend.onrender.com/auth/login", {
      method: "POST",
      crossorigin: true,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       email, password,
      })
    }).then((response) => response.json())
    .then((data) => {
      // Handle successful login
      
      console.log(data);
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
    setLoggedIn(true);
};

  

  return (
<div>
  
  {loggedIn && <Redirect to='/memes' />}
    <form id="form-login" onSubmit={handleLogin}>
      <div className="form-group">
        <i className="input-icon uil uil-at"></i>
        <input
          type="email"
          name="email"
          id="email"
          className="form-style"
          placeholder="Your Email"
          autoComplete="off"
          onChange={e => SetEmail( e.target.value )} required
        />
      </div>
      <div className="form-group mt-2">
        <i className="input-icon uil uil-lock-alt"></i>
        <input
          type="password"
          name="password"
          className="form-style"
          placeholder="Your Password"
          id="password"
          autoComplete="off"
          onChange={e =>
            SetPassword( e.target.value )} required
          
        />
      </div>
      <button type="submit" className="btn btn-secondary mt-4">
     
        Submit
      </button>
      <p className="mb-0 mt-4 text-center">
        <a href="#0" className="" style={{"textDecoration": "none", "color": "#adb5bd"}}>
          Forgot Your Password?
        </a>
      </p>
    </form>
   
    </div>
  );
};

export default Login;