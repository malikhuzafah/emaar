import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Tile from "../../components/Tile/Tile";
import DigitalExperience from "../../components/Home/DigitalExperience";
import Properties from "../../components/Home/Properties";
import Footer from "../../components/Footer/Footer";
import SearchFilterBar from "../../components/SearchFilterBar";
import Heading from "../../components/Heading/Heading";

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <SearchFilterBar />
        {/* <h1>Welcome to the Home Page</h1> */}
      </div>
      <Container>
        <div
          style={{
            paddingTop: "100px",
            paddingBottom: "30px",
          }}
        >
          <Heading title={"New"} />
        </div>
        <Grid container spacing={2}>
          <Tile
            title={"Communities 360° Tour"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor excepturi nulla aliquid, ratione sit repellendus impedit voluptatum doloremque a corporis, voluptatibus, soluta cumque laboriosam ipsum nemo quia. Facere, fugiat?"
            }
            img={"/assets/images/communities.jpg"}
            link={"/"}
          />
          <Tile
            title={"Communities 360° Tour"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor excepturi nulla aliquid, ratione sit repellendus impedit voluptatum doloremque a corporis, voluptatibus, soluta cumque laboriosam ipsum nemo quia. Facere, fugiat?"
            }
            img={"/assets/images/communities.jpg"}
            link={"/"}
          />
          <Tile
            title={"Communities 360° Tour"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor excepturi nulla aliquid, ratione sit repellendus impedit voluptatum doloremque a corporis, voluptatibus, soluta cumque laboriosam ipsum nemo quia. Facere, fugiat?"
            }
            img={"/assets/images/communities.jpg"}
            link={"/"}
          />
        </Grid>
        <DigitalExperience />
        <Properties />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
