import React, { useState } from "react";
import { Link } from "react-router-dom";

import userInfo from "./secrets";
import Signup from "./Signup";

function Login(props) {
  const [password, updatePassword] = useState("");
  const name = props.username;
  // console.log(userInfo.don);
  // console.log(props.username);

  const handleLoggedin = () => {
    props.updateLoggedin(true);
  };

  const handleFailedLogin = (e) => {
    e.preventDefault();
    props.updateUsername("");
    updatePassword("");
    window.location.reload();
  };

  const onChangeUser = (e) => {
    e.preventDefault();
    props.updateUsername(e.target.value);
    console.log(props.username);
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
            <Link className="link-btn" onClick={handleLoggedin} to={`/home`}>
              Login
            </Link>
          ) : (
            <button className="link-btn" onClick={handleFailedLogin}>
              Login
            </button>
          )}
        </form>
        <Signup
          password={password}
          updatePassword={updatePassword}
          username={props.username}
          updateUsername={props.updateUsername}
          loggedin={props.loggedin}
          updateLoggedin={props.updateLoggedin}
        />
      </div>
    </div>
  );
}
export default Login;
