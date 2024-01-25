import React from "react";

const WhoWeAreItem = ({ title, desc, link }) => {
  return (
    <div
      style={{
        backgroundColor: "#F8F9FB",
        padding: "50px",
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default WhoWeAreItem;
