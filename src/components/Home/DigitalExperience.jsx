import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import Heading from "../Heading/Heading";

const DigitalExperience = () => {
  const data = [
    {
      title: "Construction updates",
      link: "/",
      icon: "/assets/digital-icon-con.png",
    },
    {
      title: "Property-related transfers",
      link: "/",
      icon: "/assets/digital-icon-prop.png",
    },
    {
      title: "Ownership updates",
      link: "/",
      icon: "/assets/digital-icon-own.png",
    },
    {
      title: "Move In/Out requests",
      link: "/",
      icon: "/assets/digital-icon-move.png",
    },
    {
      title: "Access card requests",
      link: "/",
      icon: "/assets/digital-icon-access.png",
    },
    {
      title: "Online payment",
      link: "/",
      icon: "/assets/digital-icon-online.png",
    },
    {
      title: "Amenities booking",
      link: "/",
      icon: "/assets/digital-icon-amenities.png",
    },
    {
      title: "ECM & Home services",
      link: "/",
      icon: "/assets/digital-icon-ecm.png",
    },
  ];

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            style={{
              paddingRight: "20px",
            }}
          >
            <Heading title={"A Digital Experience"} />
            <h1>THE ONE APP YOU NEED FOR ALL YOUR PROPERTY NEEDS</h1>
            <p>
              Emaar One allows homeowners and tenants to fully manage their
              property from their phone anytime anywhere.
            </p>
            <Grid container spacing={2}>
              {data.map((item, index) => {
                return (
                  <Grid item sx={12} sm={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid #000000",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            height: "20px",
                            width: "20px",
                            backgroundImage: `url(${item.icon})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
            <Divider
              style={{
                padding: "20px 0",
              }}
            />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3>Download EMAAR one app</h3>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: "url(/assets/digital-experiance.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DigitalExperience;
