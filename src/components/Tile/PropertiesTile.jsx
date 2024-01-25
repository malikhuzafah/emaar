import { Divider } from "@mui/material";
import React from "react";

const PropertiesTile = ({ height, title, desc, img }) => {
  return (
    <div>
      <div
        style={{
          height: height,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0 20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
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
        <div style={{ width: "50px" }}>
          <Divider style={{}} />
        </div>
      </div>
    </div>
  );
};

export default PropertiesTile;
