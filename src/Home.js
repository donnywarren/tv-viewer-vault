import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Img from "./assets/img-not-available.png";
import Welcome from "./assets/img-welcome.png";

function Home(props) {
  const [vaultContent, updateVaultContent] = useState([]);

  useEffect(() => {
    const airtableCall = async () => {
      const userData = await axios.get(
        `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201?filterByFormula=({user}="${props.username}")&view=Grid%20view`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      updateVaultContent(userData.data.records);
    };
    airtableCall();
  }, []);

  const handleNoteInfo = (e) => {
    props.updateNote(e.target.title);
  };

  const clearNoteInfo = () => {
    props.updateNote("");
    console.log("clear note");
  };

  const handleClearSearch = () => {
    props.updateResults("");
  };
  console.log(vaultContent);
  if (vaultContent[0]) {
    const userName = props.username;
    const capsUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
    return (
      <div>
        <h1>{`${capsUserName}'s Vault`}</h1>
        <Link
          onClick={(clearNoteInfo, handleClearSearch)}
          to="/search"
          className="link-btn"
        >
          New Search
        </Link>
        <Link onClick={clearNoteInfo} className="link-btn" to="/search">
          Back To Search Results
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
                      src={
                        item.fields.image === "welcome"
                          ? `${Welcome}`
                          : item.fields.image
                          ? item.fields.image
                          : `${Img}`
                      }
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
