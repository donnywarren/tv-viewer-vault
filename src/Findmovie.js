import React from "react";
import { useState } from "react";
import axios from "axios";
import Adult from "./assets/adult-icon-bw.png";
import MVicon from "./assets/movie-icon-bw.png";

function Findmovie(props) {
  const [inputfield, updateInputfield] = useState("");
  const [adultcontent, updateAdultcontent] = useState(false);

  const handleAdult = () => {
    adultcontent ? updateAdultcontent(false) : updateAdultcontent(true);
  };

  const handleMovieClick = (e) => {
    e.preventDefault();
    props.updateTvmv("m");

    const MakeApiCall = async () => {
      console.log(process.env.REACT_APP_TMDB_API_KEY);
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${inputfield}&page=1&include_adult=${adultcontent}`
      );
      props.updateResults(res.data.results);
    };
    MakeApiCall();
    updateInputfield("");
    updateAdultcontent(false);
  };

  const onChangeMovie = (e) => {
    e.preventDefault();
    updateInputfield(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="movie-input-container">
          <img className="movie-icon" src={MVicon} alt="movie" />
          <label>
            <input
              className="movie-input"
              type="text"
              name="movietitle"
              // placeholder="Movie Title (partials okay)"
              autoComplete="off"
              value={inputfield}
              onChange={onChangeMovie}
            />
          </label>
          <img
            className={`${adultcontent ? "adult-icon-clicked" : "adult-icon"}`}
            src={Adult}
            alt="adult content"
            onClick={handleAdult}
          />
        </div>
        <button className="link-btn" onClick={handleMovieClick}>
          Find Movie
        </button>
      </form>
    </div>
  );
}

export default Findmovie;
