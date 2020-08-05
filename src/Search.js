import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img from "./assets/img-not-available.png";

function Search(props) {
  const [results, updateResults] = useState("");

  useEffect(() => {
    const MakeApiCall = async () => {
      const res = await axios(
        "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=friends"
      );
      updateResults(res.data.results);
      console.log(res.data.results);
      console.log(res.data);
    };
    MakeApiCall();
    console.log(results);
    console.log(`test ${results}`);
    console.log(Img);
  }, []);

  if (results) {
    return (
      <div>
        <h1>Search Path</h1>
        <Link to="/home" className="link-btn">
          Your Vault
        </Link>
        <div className="search-controls-container"></div>
        <div className="show-container">
          {results.map((item) => {
            return (
              <div key={item.id} className="show-card">
                <Link to={`/showfocus/${item.id}/x`} className="show-link">
                  <img
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : `${Img}`
                    }
                    alt={`${item.name} poster`}
                  />
                  <h3 className="show-link">{item.name}</h3>
                  <p className="show-link">{`Release: ${item.first_air_date}`}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Search;
// "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek"
// title: data.data.results[1].name,

// THE MOVIE DATA BASE - TMDB:

// KEY: 8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE IMAGE REQUEST:  https://image.tmdb.org/t/p/w500/5iROn4oot6R0kkpWD6oJdHB15ZU.jpg

// API Read Access Token(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAyMTg2OGJiYWI4NGFlNGY5ZDE2ZmRjMDY0NWUwYyIsInN1YiI6IjVlNjQ0ZmVkM2UwMWVhMDAxM2ViMGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jaWg3niI3pYUbBqqI9vZ6U53yxMyC72hs85oHN5C8q4
