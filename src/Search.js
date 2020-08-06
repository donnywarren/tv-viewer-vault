import React from "react";
import { Link } from "react-router-dom";
import Findmovie from "./Findmovie";
import Findshow from "./Findshow";
import Resultswindow from "./Resultswindow";

function Search(props) {
  const results = props.results;
  const updateResults = props.updateResults;
  const tvmv = props.tvmv;
  const updateTvmv = props.updateTvmv;

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
