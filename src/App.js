import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [loggedin, updateLoggin] = useState(false);

  return (
    <div className="App">
      <h1>TV VIEWER VAULT</h1>
      <Login />
      <Home />
    </div>
  );
}

export default App;
