import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Showfocus from "./Showfocus";

function App() {
  const [loggedin, updateLoggin] = useState(false);

  return (
    <div className="App">
      <h1>TV VIEWER VAULT</h1>
      <Login />
      <Home />
      {/* <Showfocus /> */}
    </div>
  );
}

export default App;
