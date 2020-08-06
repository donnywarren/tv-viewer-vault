import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Img } from "./assets/img-welcome.png";

import userInfo from "./secrets";

function Signup(props) {
  // const [password, updatePassword] = useState("");
  // const name = props.username;
  // console.log(userInfo.don);
  // console.log(username);

  const handleLoggedin = (e) => {
    e.preventDefault();
    props.updateLoggedin(true);
    console.log(props.loggedin);
  };

  const handleFailedLogin = (e) => {
    e.preventDefault();
    props.updateUsername("");
    props.updatePassword("");
    window.location.reload();
  };

  const onChangeUser = (e) => {
    e.preventDefault();
    props.updateUsername(e.target.value);
    console.log(props.username);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    props.updatePassword(e.target.value);
    console.log(props.password);
  };

  const handleNewUser = async (e) => {
    e.preventDefault();
    props.updateLoggedin(true);
    await axios.post(
      "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201",
      {
        fields: {
          user: `${props.username}`,
          title: `Welcome ${props.username}!  Click "New Search" to begin.`,
          image: "",
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
    // props.updateNote("");
    // history.push("/home");
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
      <div onClick={handleNewUser}>
        <Link to={`/home`} className="link-btn">
          Signup
        </Link>
      </div>
    </form>
  );
}
export default Signup;
