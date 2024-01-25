import React from "react";
import Filter from "./Filter";
import "./searchbarfilter.css";

const options = ["Apartments", "Houses", "Plot", "Hotel", "Office", "Farm"];

function SearchFilterBar() {
  return (
    <div className="search__bar">
      <Filter options={options}>PROPERTY TYPE</Filter>
      <Filter options={options}>Bedroom</Filter>
      <Filter options={options}>Price Range</Filter>
      <Filter options={options}>Community</Filter>
      <button className="search__button">Search Properties</button>
    </div>
  );
}

export default SearchFilterBar;
