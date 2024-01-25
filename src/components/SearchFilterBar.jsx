import React from "react";
import Filter from "./Filter";
import "./searchbarfilter.css";

const options = ["Apartments", "Houses", "Plot", "Hotel", "Office", "Farm"];

function SearchFilterBar() {
  return (
    <div className="search__bar">
      <Filter options={options}>PROPERTY TYPE</Filter>
      <Filter options={options}>Property Type</Filter>
      <Filter options={options}>Property Type</Filter>
      <Filter options={options}>Property Type</Filter>
      <button className="search__button">Search Properties</button>
    </div>
  );
}

export default SearchFilterBar;
