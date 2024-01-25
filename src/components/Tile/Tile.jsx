import { Grid } from "@mui/material";
import React from "react";

const Tile = ({ title, desc, img, link }) => {
  return (
    <Grid item xs={12} md={4}>
      <a href="">
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: "#000000",
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </a>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{title}</h1>
        <p>{desc}</p>
        <button
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            height: "50px",
            border: "none",
            fontSize: "1rem",
            padding: "0 70px",
            cursor: "pointer",
          }}
        >
          Learn More
        </button>
      </div>
    </Grid>
  );
};

export default Tile;
