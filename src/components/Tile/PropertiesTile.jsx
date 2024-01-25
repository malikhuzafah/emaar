import { Divider } from "@mui/material";
import React from "react";

const PropertiesTile = ({ height, title, desc }) => {
  return (
    <div>
      <div
        style={{
          height: height,
          backgroundColor: "#000000",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
        <Divider
          orientation="vertical"
          flexItem
          style={{
            margin: "0 10px",
          }}
        />
        {desc}
      </div>
      <Divider />
    </div>
  );
};

export default PropertiesTile;
