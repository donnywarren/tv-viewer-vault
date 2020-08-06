import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function Addtovault(props) {
  const params = useParams();
  const history = useHistory();

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201",
      {
        fields: {
          user: `${props.username}`,
          imbd: `${params.showid}`,
          image: !props.show.poster_path
            ? null
            : `https://image.tmdb.org/t/p/w500${props.show.poster_path}`,
          title: `${props.show.name ? props.show.name : props.show.title}`,
          notes: props.note,
          tvmv: `${params.tvmv}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.updateNote("");
    history.push("/home");
  };
  return (
    <button className="link-btn" onClick={handleAdd}>
      Add To Your Vault
    </button>
  );
}

export default Addtovault;
