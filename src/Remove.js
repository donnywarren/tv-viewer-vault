import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function Remove() {
  const params = useParams();
  const history = useHistory();

  const handleRemove = async () => {
    const deleteRecord = await axios.delete(
      `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201/${params.airtableid}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/home");
    console.log("delete", `${params.airtableid}`);
    console.log(deleteRecord);
  };

  return (
    <button className="link-btn" onClick={handleRemove}>
      Remove From Vault
    </button>
  );
}

export default Remove;
