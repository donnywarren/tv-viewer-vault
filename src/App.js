import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Search from "./Search";
import Showfocus from "./Showfocus";

function App() {
  const [loggedin, updateLoggedin] = useState(false);
  const [favorites, updateFavorites] = useState("");
  const [username, updateUsername] = useState("don");
  // console.log(loggedin);
  // console.log(favorites);

  return (
    <div className="App">
      <h1>TV VIEWER VAULT</h1>
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
          favorites={favorites}
          updateFavorites={updateFavorites}
          username={username}
        />
      </Route>
      <Route path="/search">
        <Search username={username} />
      </Route>
      <Route path="/showfocus/:showid/:airtableid">
        <Showfocus username={username} />
      </Route>
    </div>
  );
}

export default App;

// THE MOVIE DATA BASE - TMDB:

// KEY: 8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c

// API Read Access Token(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAyMTg2OGJiYWI4NGFlNGY5ZDE2ZmRjMDY0NWUwYyIsInN1YiI6IjVlNjQ0ZmVkM2UwMWVhMDAxM2ViMGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jaWg3niI3pYUbBqqI9vZ6U53yxMyC72hs85oHN5C8q4
