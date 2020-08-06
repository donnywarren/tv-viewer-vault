import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Findmovie from "./Findmovie";
import Findshow from "./Findshow";
import Resultswindow from "./Resultswindow";

function Search(props) {
  const [results, updateResults] = useState("");
  // const [tvmv, updateTvmv] = useState("");
  const tvmv = props.tvmv;
  const updateTvmv = props.updateTvmv;

  useEffect(() => {
    updateResults("");
  }, []);

  return (
    <div>
      <h1>Search Path</h1>
      <Link to="/home" className="link-btn">
        Your Vault
      </Link>
      <div className="search-controls-container">
        <Findmovie
          results={results}
          updateResults={updateResults}
          tvmv={tvmv}
          updateTvmv={updateTvmv}
        />
        <Findshow
          results={results}
          updateResults={updateResults}
          tvmv={tvmv}
          updateTvmv={updateTvmv}
        />
      </div>
      <div className="show-container">this is where the results go</div>
      <Resultswindow
        results={results}
        updateResults={updateResults}
        tvmv={tvmv}
        updateTvmv={updateTvmv}
      />
    </div>
  );
}

export default Search;
// "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek"
// title: data.data.results[1].name,

// THE MOVIE DATA BASE - TMDB:

// KEY: 8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE IMAGE REQUEST:  https://image.tmdb.org/t/p/w500/5iROn4oot6R0kkpWD6oJdHB15ZU.jpg

// API Read Access Token(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAyMTg2OGJiYWI4NGFlNGY5ZDE2ZmRjMDY0NWUwYyIsInN1YiI6IjVlNjQ0ZmVkM2UwMWVhMDAxM2ViMGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jaWg3niI3pYUbBqqI9vZ6U53yxMyC72hs85oHN5C8q4
