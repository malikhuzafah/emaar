import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PropertiesTile from "../Tile/PropertiesTile";

const Properties = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sx={12} sm={4}>
          <div>
            <Typography>
              Properties <Divider />
            </Typography>
            <h1>EMAAR LEADING REAL ESTATE DEVELOPER IN DUBAI</h1>
            <p>
              Our properties each have their own unique design aesthetic,
              providing an aspirational lifestyle within a thriving community,
              supported by Emaar’s community management team.
            </p>
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
              View All Properties
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"500px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Properties;
