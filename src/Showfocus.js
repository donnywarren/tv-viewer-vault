import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Img from "./assets/img-not-available.png";
import Addtovault from "./Addtovault";
import Remove from "./Remove";
import Updaterecord from "./Updaterecord";
import Logout from "./Logout";

function Showfocus(props) {
  const params = useParams();
  const [show, updateShow] = useState({});
  const note = props.note;
  const updateNote = props.updateNote;

  useEffect(() => {
    const showApiCall = async () => {
      const res = await axios(
        params.tvmv === "t"
          ? `https://api.themoviedb.org/3/tv/${params.showid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
          : `https://api.themoviedb.org/3/movie/${params.showid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      );
      updateShow(res.data);
    };
    showApiCall();
  }, []);

  const handleNoteChange = (e) => {
    e.preventDefault();
    updateNote(e.target.value);
  };

  const clearNoteInfo = () => {
    props.updateNote("");
  };

  const handleClearSearch = () => {
    props.updateResults("");
  };

  return (
    <div className="show-focus-page">
      <div className="show-focus-container">
        <h1 className="show-title">{show.name ? show.name : show.title}</h1>
        <p className="release-date">
          <strong>Released:</strong>{" "}
          {show.first_air_date ? show.first_air_date : show.release_date}
        </p>
        <img
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
              : `${Img}`
          }
          alt={`${show.name} poster`}
        />
        <p className="show-overview">{show.overview}</p>
        <div className="show-notes">
          <p>Personal notes:</p>
          <textarea
            name="notes"
            wrap="soft"
            defaultValue={`${note}`}
            onChange={handleNoteChange}
          ></textarea>
        </div>
        <div className="on-focus-btn-container">
          {params.airtableid === "x" ? (
            <Addtovault
              show={show}
              updateShow={updateShow}
              username={props.username}
              note={note}
              updateNote={updateNote}
            />
          ) : null}
          {params.airtableid !== "x" ? (
            <Updaterecord airtableid={params.airtableid} note={note} />
          ) : null}

          {params.airtableid !== "x" ? (
            <Remove airtableid={params.airtableid} />
          ) : null}
          <Link className="link-btn" to="/home">
            Your Vault
          </Link>
          <Link onClick={clearNoteInfo} className="link-btn" to="/search">
            Back To Search Results
          </Link>
          <Link
            onClick={(clearNoteInfo, handleClearSearch)}
            className="link-btn"
            to="/search"
          >
            New Search
          </Link>
          <Logout
            loggedin={props.loggedin}
            updateLoggedin={props.updateLoggedin}
            username={props.username}
            updateUsername={props.updateUsername}
          />
        </div>
      </div>
    </div>
  );
}

export default Showfocus;
