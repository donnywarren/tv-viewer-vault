import React from "react";
import { Link } from "react-router-dom";

function Logout(props) {
  const handleLogout = (e) => {
    props.updateLoggedin(false);
    props.updateUsername("");
  };
  return (
    <Link onClick={handleLogout} className="link-btn" to="/">
      Logout
    </Link>
  );
}

export default Logout;
