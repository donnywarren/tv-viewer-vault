import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Search from "./Search";
import Showfocus from "./Showfocus";
import Footer from "./Footer";
import TV from "./assets/tv-open-screen.png";
import MV from "./assets/hollywood-icon-2.png";

function App() {
  const [loggedin, updateLoggedin] = useState(false);
  const [favorites, updateFavorites] = useState("");
  const [username, updateUsername] = useState("");
  const [tvmv, updateTvmv] = useState("");
  const [note, updateNote] = useState("");
  const [results, updateResults] = useState("");

  return (
    <div className="App">
      <div className="hero-container">
        <img className="hero-img" src={TV} alt="tv" />
        <div className="hero-h1-container">
          <h1 className="hero-h1">VIEWER VAULT</h1>
        </div>
        <img className="hero-img" src={MV} alt="hollywood" />
      </div>
      <Route exact path="/">
        <Login
          loggedin={loggedin}
          updateLoggedin={updateLoggedin}
          username={username}
          updateUsername={updateUsername}
        />
      </Route>
      <Route path="/home">
        <Home
          loggedin={loggedin}
          updateLoggedin={updateLoggedin}
          favorites={favorites}
          updateFavorites={updateFavorites}
          username={username}
          updateUsername={updateUsername}
          tvmv={tvmv}
          updateTvmv={updateTvmv}
          note={note}
          updateNote={updateNote}
          results={results}
          updateResults={updateResults}
        />
      </Route>
      <Route path="/search">
        <Search
          loggedin={loggedin}
          updateLoggedin={updateLoggedin}
          username={username}
          updateUsername={updateUsername}
          tvmv={tvmv}
          updateTvmv={updateTvmv}
          results={results}
          updateResults={updateResults}
        />
      </Route>
      <Route path="/showfocus/:showid/:airtableid/:tvmv">
        <Showfocus
          loggedin={loggedin}
          updateLoggedin={updateLoggedin}
          username={username}
          updateUsername={updateUsername}
          tvmv={tvmv}
          updateTvmv={updateTvmv}
          note={note}
          updateNote={updateNote}
          results={results}
          updateResults={updateResults}
        />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
