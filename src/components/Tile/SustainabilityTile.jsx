import React from "react";
import Heading from "../Heading/Heading";

const SustainabilityTile = ({ title, link }) => {
  return (
    <div>
      <div style={{ height: "250px", backgroundColor: "#000000" }}></div>
      <Heading title={title} />
    </div>
  );
};

export default SustainabilityTile;
