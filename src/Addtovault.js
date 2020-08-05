import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Showfocus from "./Showfocus";

function Addtovault(props) {
  const params = useParams();
  const history = useHistory();
  const user = { params };

  const handleAdd = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201",
      {
        fields: {
          user: `${props.username}`,
          imbd: `${params.showid}`,
          image: `https://image.tmdb.org/t/p/w500${props.show.poster_path}`,
          title: `${props.show.name}`,
          notes: "testing this",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/home");
    // console.log(params.showid);
    // console.log(props.show.name);
    // console.log(props.show.poster_path);
    // console.log(props.show.id);
    // console.log(props.username);
    // console.log(props.show);
  };
  return (
    <button className="link-btn" onClick={handleAdd}>
      Add To Your Vault
    </button>
  );
}

export default Addtovault;
