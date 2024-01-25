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
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OfferTile;
