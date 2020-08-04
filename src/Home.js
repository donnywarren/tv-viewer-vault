import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Showfocus from "./Showfocus";

function Home() {
  const [results, updateResults] = useState("");
  const params = useParams();
  const data = results.results;

  useEffect(() => {
    const MakeApiCall = async () => {
      const res = await axios(
        "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek"
      );
      updateResults(res.data);
      console.log(res.data.results);
      console.log(res.data);
      // console.log(params);
    };
    MakeApiCall();
    console.log(results);
    console.log(`test ${results}`);
  }, []);

  // console.log(params);
  if (data) {
    return (
      <div>
        <h1>Home Path</h1>
        <h3>{`Hello ${params.userid}, ${params.test}`}</h3>
        <p>{data[5].name}</p>

        {data.map((item) => {
          <p>{item.name}</p>;
          <div>
            <Link to={`/showfocus/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={`${item.name} poster`}
              />
              <p>{item.first_air_date}</p>
              <p>{item.name}</p>
            </Link>
            ;<p>{item.name}</p>;
          </div>;
        })}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Home;
// "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek"
// title: data.data.results[1].name,

// THE MOVIE DATA BASE - TMDB:

// KEY: 8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE IMAGE REQUEST:  https://image.tmdb.org/t/p/w500/5iROn4oot6R0kkpWD6oJdHB15ZU.jpg

// API Read Access Token(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAyMTg2OGJiYWI4NGFlNGY5ZDE2ZmRjMDY0NWUwYyIsInN1YiI6IjVlNjQ0ZmVkM2UwMWVhMDAxM2ViMGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jaWg3niI3pYUbBqqI9vZ6U53yxMyC72hs85oHN5C8q4
