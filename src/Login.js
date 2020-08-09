import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Signup from "./Signup";

function Login(props) {
  const [password, updatePassword] = useState("");
  const [tempusername, updateTempusername] = useState("");
  const history = useHistory();

  const handleLoggedin = () => {
    props.updateLoggedin(true);
    history.push("/home");
  };

  const handleFailedLogin = () => {
    props.updateUsername("");
    updateTempusername("");
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

      password === savedPassword ? handleLoggedin() : handleFailedLogin();
    } else {
      handleFailedLogin();
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.attributes[1].value === "username") {
      props.updateUsername(e.target.value);
      updateTempusername(e.target.value);
    } else {
      updatePassword(e.target.value);
    }
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
              value={tempusername}
              onChange={onChangeHandler}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              value={password}
              onChange={onChangeHandler}
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
