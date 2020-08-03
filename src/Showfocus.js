import React from "react";

function Showfocus() {
  return (
    <div className="App">
      <h1>Show Focus Path</h1>
      <Login />
      <div>
        <h1>{results.name}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
        <h2>{results.id}</h2>
        <p>{results.overview}</p>
      </div>
    </div>
  );
}

export default Showfocus;
