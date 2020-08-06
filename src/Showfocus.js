import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Img from "./assets/img-not-available.png";
import Addtovault from "./Addtovault";
import Remove from "./Remove";

function Showfocus(props) {
  const params = useParams();
  const [show, updateShow] = useState({});
  const note = props.note;
  const updateNote = props.updateNote;

  console.log(params.airtableid);
  console.log(note);

  useEffect(() => {
    const showApiCall = async () => {
      const res = await axios(
        params.tvmv === "t"
          ? `https://api.themoviedb.org/3/tv/${params.showid}?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US`
          : `https://api.themoviedb.org/3/movie/${params.showid}?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US`
      );
      updateShow(res.data);
      console.log(res.data.id);
    };
    showApiCall();
  }, []);

  const handleNoteChange = (e) => {
    e.preventDefault();
    updateNote(e.target.value);
  };
  return (
    <div>
      <h1>Show Focus Path</h1>

      <h1>{show.name ? show.name : show.title}</h1>
      <img
        src={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
            : `${Img}`
        }
        alt={`${show.name} poster`}
      />

      <p>{show.first_air_date ? show.first_air_date : show.release_date}</p>
      <p>{show.overview}</p>
      <div className="show-notes">
        <p>Person notes:</p>
        <textarea
          name="notes"
          wrap="soft"
          defaultValue={`${note}`}
          onChange={handleNoteChange}
        ></textarea>
      </div>
      <Addtovault
        show={show}
        updateShow={updateShow}
        username={props.username}
        note={note}
        updateNote={updateNote}
      />
      {params.airtableid !== "x" ? (
        <Remove airtableid={params.airtableid} />
      ) : null}
      <Link className="link-btn" to="/search">
        Search
      </Link>
      <Link className="link-btn" to="/home">
        Your Vault
      </Link>
    </div>
  );
}

export default Showfocus;
