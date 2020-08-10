import React from "react";
import { useState } from "react";
import axios from "axios";
import TVicon from "./assets/tv-icon-bw.png";

function Findshow(props) {
  const [inputfield, updateInputfield] = useState("");

  const handleTVClick = (e) => {
    e.preventDefault();
    props.updateTvmv("t");

    const MakeApiCall = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${inputfield}`
      );
      props.updateResults(res.data.results);
    };
    MakeApiCall();
    updateInputfield("");
  };

  const onChangeTV = (e) => {
    e.preventDefault();
    updateInputfield(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="tv-input-container">
          <img className="tv-icon" src={TVicon} alt="tv" />
          <label>
            <input
              className="tv-input"
              type="text"
              name="showtitle"
              // placeholder="TV Show Title (partials okay)"
              autoComplete="off"
              value={inputfield}
              onChange={onChangeTV}
            />
          </label>
        </div>

        <button className="link-btn" onClick={handleTVClick}>
          Find Show
        </button>
      </form>
    </div>
  );
}

export default Findshow;
