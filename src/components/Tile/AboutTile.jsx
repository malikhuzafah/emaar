import React from "react";

const AboutTile = ({ title, desc, link }) => {
  return (
    <div>
      <div style={{ height: "200px", backgroundColor: "#000000" }}></div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
        }}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
        <a
          href=""
          style={{
            color: "#000000",
            textDecoration: "none",
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutTile;
