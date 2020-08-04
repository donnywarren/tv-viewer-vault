import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Showfocus() {
  const params = useParams();
  const [show, updateShow] = useState({});
  console.log(params.id);

  useEffect(() => {
    const showApiCall = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US`
      );
      updateShow(res.data);
      console.log(res.data.name);
    };
    showApiCall();
  }, []);
  return (
    <div>
      <h1>Show Focus Path</h1>
      <h2>{params.id}</h2>
      <h3>{show.name}</h3>
      <Link to="/home/  /  ">home</Link>
    </div>
  );
}

export default Showfocus;
