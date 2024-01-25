import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Tile from "../../components/Tile/Tile";
import DigitalExperience from "../../components/Home/DigitalExperience";
import Properties from "../../components/Home/Properties";
import Footer from "../../components/Footer/Footer";
import SearchFilterBar from "../../components/SearchFilterBar";
import Heading from "../../components/Heading/Heading";
import Communities from "../Communities/Communities";

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
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.3) 23%, rgba(0,0,0,0.2) 100%), url(/assets/home.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SearchFilterBar />
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
              "Experience Dubai Hills Estate communities and amenities from the comfort of your home."
            }
            img={"/assets/com-1.jpg"}
            link={"/"}
          />
          <Tile
            title={"International Projects"}
            desc={"Explore our portfolio of international projects."}
            img={"/assets/com-2.jpg"}
            link={"/"}
          />
          <Tile
            title={"Discover Our Blogs"}
            desc={
              "Click to read our top tips and tricks for property management, home decoration and more."
            }
            img={"/assets/com-3.jpg"}
            link={"/"}
          />
        </Grid>
        <DigitalExperience />
        <Properties />
      </Container>
      <Container>
        <Heading title={"Communities"} />
        <h1>Featured Communities</h1>
      </Container>
      <Communities />
      <Footer />
    </div>
  );
};

export default Home;
