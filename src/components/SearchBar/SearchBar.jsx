import "./SearchBar.scss";

import React from "react";
import Background from "../../assets/images/bg-shorten-desktop.svg";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <img className="background" src={Background} alt="background-color" />
      <div className="search-area">
        <input
          className="search-bar"
          type="text"
          placeholder="Shorten a link here..."
        />

        <button>Shorten It!</button>
      </div>
    </div>
  );
}
