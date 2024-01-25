import React from "react";
import { BottomNavigation, Container, Divider, Grid } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fb",
        marginTop: "50px",
      }}
    >
      <Container>
        {/* <BottomNavigation> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2>EMAAR</h2>
              <Divider
                orientation="vertical"
                flexItem
                style={{
                  margin: "0 50px",
                }}
              />
              <div>Social Media icons</div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <input
                type="text"
                style={{
                  height: "50px",
                  width: "400px",
                  border: "none",
                  padding: "0 10px",
                  fontSize: "1rem",
                }}
                placeholder="Enter email"
              />
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
                SUBSCRIBE
              </button>
            </div>
          </Grid>
        </Grid>
        <Divider />
        {/* </BottomNavigation> */}
      </Container>
    </div>
  );
};

export default Footer;
