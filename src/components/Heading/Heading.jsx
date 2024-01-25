import { Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <Typography>{title}</Typography>
      </div>
      <div>
        <Divider
          style={{
            width: "100px",
            marginLeft: "10px",
            borderWidth: "1px",
          }}
        />
      </div>
    </div>
  );
};

export default Heading;
