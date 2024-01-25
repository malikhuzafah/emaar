import React from "react";
import Filter from "./Filter";
import "./searchbarfilter.css";
import { Container } from "@mui/material";

const options = ["Apartments", "Houses", "Plot", "Hotel", "Office", "Farm"];

function SearchFilterBar() {
  return (
    <>
      <Container sx={{ display: { xs: "none", md: "flex" } }}>
        <div className="search__bar">
          <Filter options={options}>PROPERTY TYPE</Filter>
          <Filter options={options}>Bedroom</Filter>
          <Filter options={options}>Price Range</Filter>
          <Filter options={options}>Community</Filter>
          <button className="search__button">Search Properties</button>
        </div>
      </Container>
      <Container sx={{ display: { xs: "flex", md: "none" } }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <button className="btn btn-primary">Search</button>
          </div>
          <div>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SearchFilterBar;
