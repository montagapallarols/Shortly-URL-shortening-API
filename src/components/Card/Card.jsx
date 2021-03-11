import "./Card.scss";

import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-icon-container">
        <img className="card-icon" src={props.icon} alt="icon" />
      </div>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-text">{props.text}</p>
    </div>
  );
}
