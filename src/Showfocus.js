import React from "react";
// import { props } from "./Home";

function Showfocus(props) {
  return (
    <div>
      <h1>Show Focus Path</h1>
      <h1>{props.results.name}</h1>
      <div>
        <h1>{props.results.name}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.results.poster_path}`}
        />
        <h2>{props.results.id}</h2>
        <p>{props.results.overview}</p>
      </div>
    </div>
  );
}

export default Showfocus;
