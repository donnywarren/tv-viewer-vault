import React, { useEffect, useState } from "react";
import "./App.css";

function Login() {
  const [loggedin, updateLoggin] = useState(false);
  const [usernameInput, updateUsernameInput] = useState("");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    updateUsername(usernameInput);
    console.log(`login name: ${username}`);
    console.log(`login password: ${password}`);
  };

  const onChangeUser = (e) => {
    e.preventDefault();
    updateUsername(e.target.value);
    console.log(username);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    updatePassword(e.target.value);
    console.log(password);
  };

  const userNameInputField = (
    <label>
      <input
        type="text"
        name="username"
        placeholder="username"
        autoComplete="off"
        onChange={onChangeUser}
      />
    </label>
  );

  const passwordInputField = (
    <label>
      <input
        type="password"
        name="password"
        placeholder="password"
        autoComplete="off"
        onChange={onChangePassword}
      />
    </label>
  );

  return (
    <div className="App">
      <div className="login-signup-container">
        <form className="loginForm">
          {userNameInputField}
          {passwordInputField}
          <button onClick={handleLogin}>login</button>
        </form>
        <form className="signupForm">
          <label>
            <input
              type="email"
              name="username"
              placeholder="email"
              autoComplete="off"
              onChange={onChangeUser}
            />
          </label>
          {userNameInputField}
          {passwordInputField}
          <label>
            <input
              type="password"
              name="confirm-password"
              placeholder="confirm password"
              autoComplete="none"
              onChange={onChangePassword}
            />
          </label>
          <button onClick={handleLogin}>signup</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
