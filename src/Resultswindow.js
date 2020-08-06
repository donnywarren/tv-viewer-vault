import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img from "./assets/img-not-available.png";
import Findmovie from "./Findmovie";
import Findshow from "./Findshow";

function Search(props) {
  const results = props.results;

  if (results) {
    console.log(results[0].id);
    return (
      <div>
        <h1>Results:</h1>
        <div className="show-container">
          {results.map((item) => {
            return (
              <div key={item.id} className="show-card">
                <Link
                  to={`/showfocus/${item.id}/x/${props.tvmv}`}
                  className="show-link"
                >
                  <img
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : `${Img}`
                    }
                    alt={`${item.name ? item.name : item.title} poster`}
                  />
                  <h3 className="show-link">
                    {item.name ? item.name : item.title}
                  </h3>
                  <p className="show-link">{`Release: ${
                    item.first_air_date
                      ? item.first_air_date
                      : item.release_date
                  }`}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Awaiting your instructions...</h1>;
  }
}

export default Search;

// item.first_air_date ? item.first_air_date : item.release_date
