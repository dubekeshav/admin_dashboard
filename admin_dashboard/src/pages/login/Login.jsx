import React, { useContext, useState } from "react";
import { login } from "../../context/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="loginInput"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"
        />
        <button
          className="loginButton"
          disabled={isFetching}
          onClick={handleLogin}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
