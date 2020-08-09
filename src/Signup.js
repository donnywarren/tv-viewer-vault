import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup(props) {
  const [newUserName, updateNewUserName] = useState("");
  const [newUserPassword, updateNewUserPassword] = useState("");
  const [newConfirmPassword, updateConfirmPassword] = useState("");
  const [email, updateEmail] = useState("");
  const history = useHistory();

  const handleFailedLogin = (e) => {
    updateNewUserName("");
    updateNewUserPassword("");
    updateConfirmPassword("");
    alert("Password and Confirm Password do not match");
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.attributes[1].value === "username") {
      updateNewUserName(e.target.value);
    } else if (e.target.attributes[1].value === "user-mail") {
      updateEmail(e.target.value);
    } else if (e.target.attributes[1].value === "password") {
      updateNewUserPassword(e.target.value);
    } else {
      updateConfirmPassword(e.target.value);
    }
  };

  const handleHistory = () => {
    history.push("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.match(/[@]/) || !email.match(/[.]/)) {
      updateEmail("");
      alert("PLEASE ENTER A VALID EMAIL");
      return;
    }

    newUserPassword !== newConfirmPassword || newUserPassword === ""
      ? handleFailedLogin()
      : handleNewUser();
  };

  const handleNewUser = async (e) => {
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

    await axios.post(
      "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%202",
      {
        fields: {
          user: `${newUserName}`,
          password: `${newUserPassword}`,
          email: `${email}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    handleHistory();
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          value={newUserName}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="email"
          name="user-mail"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
          title="Must contain at least 7 characters, one number, one
          lower and one upper case letter and one special character
          (!@#$%^&*)."
          value={newUserPassword}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          autoComplete="none"
          value={newConfirmPassword}
          onChange={handleChange}
        />
      </label>
      <button className="link-btn" type="submit">
        Signup
      </button>
    </form>
  );
}
export default Signup;
