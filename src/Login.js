import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Signup from "./Signup";

function Login(props) {
  const [password, updatePassword] = useState("");
  const history = useHistory();
  const name = props.username;

  const handleLoggedin = () => {
    props.updateLoggedin(true);
    history.push("/home");
  };

  const handleFailedLogin = () => {
    props.updateUsername("");
    updatePassword("");
    alert("username or password do not match account");
  };

  const handleCredentials = async (e) => {
    e.preventDefault();
    const userCredentials = await axios.get(
      `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%202?filterByFormula=({user}="${props.username}")&view=Grid%20view`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (userCredentials.data.records[0]) {
      const savedPassword = userCredentials.data.records[0].fields.password;
      console.log(savedPassword);

      password === savedPassword ? handleLoggedin() : handleFailedLogin();
    } else {
      handleFailedLogin();
    }
  };

  const onChangeUser = (e) => {
    e.preventDefault();
    props.updateUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    updatePassword(e.target.value);
  };

  return (
    <div className="login-page">
      <div className="login-signup-container">
        <form className="login-form">
          <label>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              value={name}
              onChange={onChangeUser}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <button className="link-btn" onClick={handleCredentials}>
            Login
          </button>
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
