import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Img from "./assets/img-not-available.png";

function Home(props) {
  const [vaultContent, updateVaultContent] = useState([]);
  // const updateNote = props.updateNote;

  useEffect(() => {
    const airtableCall = async () => {
      const userData = await axios.get(
        // `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201?filterByFormula=({user}="${props.username}")&view=Grid%20view`,
        `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201?filterByFormula=({user}="don")&view=Grid%20view`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      updateVaultContent(userData.data.records);
      console.log(userData.data.records);
    };
    airtableCall();
  }, []);

  const handleNoteInfo = (e) => {
    props.updateNote(e.target.title);
  };

  if (vaultContent[0]) {
    console.log(vaultContent[0].id);
    const userName = props.username;
    const capsUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
    return (
      <div>
        <h1>{`${capsUserName}'s Vault`}</h1>
        <Link to="/search" className="link-btn">
          Search
        </Link>
        <div className="show-container">
          {vaultContent
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <div key={item.id} className="show-card">
                  <Link
                    to={`/showfocus/${item.fields.imbd}/${item.id}/${item.fields.tvmv}`}
                    className="show-link"
                  >
                    <img
                      onClick={handleNoteInfo}
                      title={item.fields.notes}
                      src={item.fields.image}
                      alt={`${item.fields.notes} poster`}
                    />
                    <h3 className="show-link">{item.fields.title}</h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Home;
