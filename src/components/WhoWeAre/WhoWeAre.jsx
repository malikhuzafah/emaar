import { Grid } from "@mui/material";
import React from "react";
import WhoWeAreItem from "./WhoWeAreItem";

const WhoWeAre = () => {
  const whoWeAre = [
    {
      title: "Emerald Prestige PROPERTIES BOARD OF DIRECTORS",
      desc: "Emerald Prestige's leadership team is comprised of the industry's most experienced leaders, who have secured our place as one of the world's greatest real estate and lifestyle developers.",
      link: "/",
    },
    {
      title: "Emerald Prestige PROPERTIES BOARD OF DIRECTORS",
      desc: "Emerald Prestige's leadership team is comprised of the industry's most experienced leaders, who have secured our place as one of the world's greatest real estate and lifestyle developers.",
      link: "/",
    },
    {
      title: "Emerald Prestige PROPERTIES BOARD OF DIRECTORS",
      desc: "Emerald Prestige's leadership team is comprised of the industry's most experienced leaders, who have secured our place as one of the world's greatest real estate and lifestyle developers.",
      link: "/",
    },
  ];
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        WhoWeAre
      </h1>
      <Grid container spacing={2}>
        {whoWeAre.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <WhoWeAreItem
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WhoWeAre;
