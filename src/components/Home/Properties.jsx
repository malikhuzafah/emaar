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
            <h1>Emerald Prestige LEADING REAL ESTATE DEVELOPER IN DUBAI</h1>
            <p>
              Our properties each have their own unique design aesthetic,
              providing an aspirational lifestyle within a thriving community,
              supported by Emerald Prestige’s community management team.
            </p>
            <button className="btn btn-secondary">View All Properties</button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"500px"}
            title={"AEON"}
            desc={"DUBAI CREEK HARBOUR"}
            img={"/assets/prop-aeon.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"ADDRESS RESIDENCES"}
            desc={"ADDRESS AL MARJAN ISLAND, RAS AL KHAIMAH"}
            img={"/assets/prop-avonlea.jpg"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PropertiesTile
            height={"225px"}
            title={"PARK GATE"}
            desc={"DUBAI HILLS ESTATE"}
            img={"/assets/prop-park.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"AVONLEA"}
            desc={"RASHID YACHTS & MARINA"}
            img={"/assets/prop-address.jpg"}
          />
          <PropertiesTile
            height={"225px"}
            title={"BAYLINE"}
            desc={"RASHID YACHTS & MARINA"}
            img={"/assets/prop-bayline.jpg"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Properties;
