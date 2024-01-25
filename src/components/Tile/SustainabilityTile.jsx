import React from "react";
import Heading from "../Heading/Heading";

const SustainabilityTile = ({ title, img, link }) => {
  return (
    <div>
      <div
        style={{
          height: "250px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Heading title={title} />
    </div>
  );
};

export default SustainabilityTile;
