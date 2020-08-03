import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
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
      <Route exact path="/">
        <Login />
      </Route>
      <Home />
      <Route path="/showfocus/:id">
        <Showfocus />
      </Route>
    </div>
  );
}

export default App;
