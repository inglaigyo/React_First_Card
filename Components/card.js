import React from "react";
import "/src/card.css";

function card({ title, imageurl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageurl} alt="" />
      </div>
    </div>
  );
}

export default card;
