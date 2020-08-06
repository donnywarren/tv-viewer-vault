import React from "react";
import { useState } from "react";
import axios from "axios";

function Findmovie(props) {
  const [inputfield, updateInputfield] = useState("");

  const handleMovieClick = (e) => {
    e.preventDefault();
    props.updateTvmv("m");

    const MakeApiCall = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US&query=${inputfield}&page=1&include_adult=false`
      );
      props.updateResults(res.data.results);
    };
    MakeApiCall();
    updateInputfield("");
  };

  const onChangeMovie = (e) => {
    e.preventDefault();
    updateInputfield(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="movietitle"
            placeholder="Movie Title (partials okay)"
            autoComplete="off"
            value={inputfield}
            onChange={onChangeMovie}
          />
        </label>
        <button className="link-btn" onClick={handleMovieClick}>
          Find Movie
        </button>
      </form>
    </div>
  );
}

export default Findmovie;
