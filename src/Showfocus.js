import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Img from "./assets/img-not-available.png";
import Addtovault from "./Addtovault";
import Remove from "./Remove";

function Showfocus(props) {
  const params = useParams();
  const [show, updateShow] = useState({});
  console.log(params.airtableid);

  useEffect(() => {
    const showApiCall = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/tv/${params.showid}?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US`
      );
      updateShow(res.data);
      console.log(res.data.poster_path);
    };
    showApiCall();
  }, []);
  return (
    <div>
      <h1>Show Focus Path</h1>

      <h1>{show.name}</h1>
      <img
        src={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
            : `${Img}`
        }
        alt={`${show.name} poster`}
      />
      <p>{show.first_air_date}</p>
      <p>{show.overview}</p>
      <Addtovault
        show={show}
        updateShow={updateShow}
        username={props.username}
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
