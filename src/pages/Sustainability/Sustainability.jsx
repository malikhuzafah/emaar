import { Container, Grid } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../../components/Heading/Heading";
import SustainabilityTile from "../../components/Tile/SustainabilityTile";
import Footer from "../../components/Footer/Footer";

const Sustainability = () => {
  const data = [
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
    {
      title: "Our Stories",
      link: "/",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "80vh",
          backgroundColor: "#000000",
        }}
      ></div>
      <Container>
        <div
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <h1>OUR APPROACH TOWARDS SUSTAINABILITY</h1>
          <p>
            At Emaar, we consider sustainability to be a fundamental aspect of
            our lives. It is an investment in the future of both society and
            ourselves. Therefore, we are confident that integrating
            sustainability into our business strategy will result in economic,
            environmental, and social advancement. Emaar’s overall approach to
            sustainability is guided by our Sustainable Development Goals. In
            addition, our Code of Conduct guides the behaviour of all employees
            in relation to their colleagues, local communities, and the
            environment. At an operational level, we have a suite of procedures
            and policies that we follow in line with national regulatory and
            international standards. All of these factors influence our approach
            to providing high-quality jobs, safe and secure employment, employee
            well-being, and opportunities for professional development. In
            addition, they influence how we communicate and consult with our
            investors, communities, government bodies, and suppliers in our
            operating areas, as well as how we monitor and enhance our
            sustainable performance.
          </p>
          <button
            style={{
              backgroundColor: "lightblue",
              border: "none",
              padding: "10px 60px",
              color: "#ffffff",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            View More <ArrowForwardIcon />
          </button>
        </div>
        <div
          style={{
            paddingBottom: "100px",
          }}
        >
          <Heading title={"CORPORATE"} />
          <h1>Sustainability</h1>
          <Grid container spacing={2}>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <SustainabilityTile title={item.title} link={item.link} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Sustainability;
