import React from "react";
import { useParams } from "react-router-dom";

function Showfocus(props) {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>Show Focus Path</h1>
      <h2>{params.id}</h2>
      {/* <h1>{params.results.name}</h1>
      <div>
        <h1>{params.results.name}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${params.results.poster_path}`}
        />
        <h2>{params.results.id}</h2>
        <p>{params.results.overview}</p>
      </div> */}
    </div>
  );
}

export default Showfocus;
