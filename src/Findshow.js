import React from "react";
import { useState } from "react";
import axios from "axios";

function Findshow(props) {
  const [inputfield, updateInputfield] = useState("");

  const handleTVClick = (e) => {
    e.preventDefault();
    props.updateTvmv("t");

    const MakeApiCall = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=${inputfield}`
      );
      props.updateResults(res.data.results);
      console.log(res.data.results);
      // console.log(res.data);
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
        <label>
          <input
            type="text"
            name="showtitle"
            placeholder="TV Show Title (partials okay)"
            autoComplete="off"
            value={inputfield}
            onChange={onChangeTV}
          />
        </label>
        <button className="link-btn" onClick={handleTVClick}>
          Find Show
        </button>
      </form>
    </div>
  );
}

export default Findshow;
