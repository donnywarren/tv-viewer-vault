import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Img } from "./assets/img-welcome.png";

import userInfo from "./secrets";

function Signup(props) {
  const [newUserName, updateNewUserName] = useState("");
  const [newUserPassword, updateNewUserPassword] = useState("");
  const [newConfirmPassword, updateConfirmPassword] = useState("");

  // console.log(newUserName);
  const handleLoggedin = (e) => {
    e.preventDefault();
    props.updateLoggedin(true);
    console.log(props.loggedin);
  };

  const handleFailedLogin = (e) => {
    e.preventDefault();
    updateNewUserName("");
    updateNewUserPassword("");
    // window.location.reload();
  };

  const onChangeUser = (e) => {
    e.preventDefault();
    updateNewUserName(e.target.value);
    // console.log(newUserName);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    updateNewUserPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    e.preventDefault();
    updateConfirmPassword(e.target.value);
  };

  const handleNewUser = async (e) => {
    e.preventDefault();
    props.updateLoggedin(true);
    props.updateUsername(newUserName);
    await axios.post(
      "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201",
      {
        fields: {
          user: `${newUserName}`,
          title: "Have Fun!",
          image: "welcome",
          tvmv: "t",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <form className="signupForm" onSubmit={handleFailedLogin}>
      <label>
        {/* <input
          type="email"
          name="username"
          placeholder="email"
          autoComplete="off"
          onChange={onChangeUser}
        /> */}
      </label>
      <label>
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          value={newUserName}
          onChange={onChangeUser}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          value={newUserPassword}
          onChange={onChangePassword}
        />
      </label>
      <label>
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          autoComplete="none"
          value={newConfirmPassword}
          onChange={onChangeConfirmPassword}
        />
      </label>

      <div onClick={handleNewUser}>
        <Link to={`/home`} className="link-btn">
          Signup
        </Link>
      </div>
    </form>
  );
}
export default Signup;
