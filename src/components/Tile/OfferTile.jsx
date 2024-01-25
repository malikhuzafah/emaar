import React from "react";

const OfferTile = ({ title, desc, link, img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "150px",
          width: "120px",
          backgroundColor: "#000000",
        }}
      ></div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OfferTile;
