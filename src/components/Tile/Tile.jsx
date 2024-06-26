import { Grid } from "@mui/material";
import React from "react";

const Tile = ({ title, desc, img, link }) => {
  return (
    <Grid item xs={12} md={4}>
      <a href={link}>
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: "#000000",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
        <button className="btn btn-secondary">Read More</button>
      </div>
    </Grid>
  );
};

export default Tile;
