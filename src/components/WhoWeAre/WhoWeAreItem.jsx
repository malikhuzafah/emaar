import React from "react";

const WhoWeAreItem = ({ title, desc, link }) => {
  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        padding: "50px",
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          padding: "10px 50px",
          color: "#ffffff",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default WhoWeAreItem;
