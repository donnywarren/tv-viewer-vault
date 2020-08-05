import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const params = useParams();

  useEffect(() => {
    const airtableCall = async () => {
      const userData = await axios.get(
        "https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201?filterByFormula=SEARCH('donnywarren',{user})",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      props.updateFavorites(userData.data);
    };
    airtableCall();
  }, []);
  if (props.favorites) {
    console.log(props.favorites.records[2]);
    return (
      <div>
        <h1>Home Path</h1>
        <p>{props.favorites.records[1].fields.title}</p>
        <Link to="/search/  /  ">search</Link>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Home;
