import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Updaterecord(props) {
  const params = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await Axios.patch(
      `https://api.airtable.com/v0/appsWFIfSTp1odUII/Table%201/${params.airtableid}`,
      {
        fields: {
          notes: props.note,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <button className="link-btn" onClick={handleUpdate}>
      Update Notes
    </button>
  );
}

export default Updaterecord;
