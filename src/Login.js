import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

import userInfo from "./secrets";
import Signup from "./Signup";

function Login(props) {
  // const [loggedin, updateLoggedin] = useState(false);
  // const [usernameInput, updateUsernameInput] = useState("");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const name = username;
  // console.log(userInfo.don);
  // console.log(username);
  const handleLoggedin = () => {
    props.updateLoggedin(true);
    // console.log(prop)
  };

  const handleFailedLogin = (e) => {
    e.preventDefault();
    updateUsername("");
    updatePassword("");
    window.location.reload();

    console.log("yippy");
    console.log(password);
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

  return (
    <div className="App">
      <div className="login-signup-container">
        <form className="loginForm">
          <label>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              onChange={onChangeUser}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              onChange={onChangePassword}
            />
          </label>
          {password === userInfo[name] ? (
            <Link
              className="link-btn"
              onClick={handleLoggedin}
              to={`/search/${username}/-`}
            >
              login
            </Link>
          ) : (
            <button className="link-btn" onClick={handleFailedLogin}>
              login
            </button>
          )}
        </form>
        <form className="signupForm" onSubmit={handleFailedLogin}>
          <Signup />
          <label>
            <input
              type="email"
              name="username"
              placeholder="email"
              autoComplete="off"
              onChange={onChangeUser}
            />
          </label>
          <label>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              onChange={onChangeUser}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              onChange={onChangePassword}
            />
          </label>
          <label>
            <input
              type="password"
              name="confirm-password"
              placeholder="confirm password"
              autoComplete="none"
              onChange={onChangePassword}
            />
          </label>
          <button>signup</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
