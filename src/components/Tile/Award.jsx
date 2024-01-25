import React from "react";

const Award = ({ title, desc, img, link, year }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          backgroundColor: "#000000",
        }}
      ></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{year}</p>
    </div>
  );
};

export default Award;
