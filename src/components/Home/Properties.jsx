import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PropertiesTile from "../Tile/PropertiesTile";
import Heading from "../Heading/Heading";

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
            <Heading title={"Properties"} />
            <h1>EMAAR LEADING REAL ESTATE DEVELOPER IN DUBAI</h1>
            <p>
              Our properties each have their own unique design aesthetic,
              providing an aspirational lifestyle within a thriving community,
              supported by Emaar’s community management team.
            </p>
            <button className="btn btn-secondary">View All Properties</button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"500px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/home.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/home.jpg"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/home.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/home.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/home.jpg"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Properties;
