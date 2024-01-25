import React from "react";

const AboutTile = ({ title, desc, img, link }) => {
  return (
    <div>
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
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
