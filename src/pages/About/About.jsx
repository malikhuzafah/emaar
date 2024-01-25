import React from "react";
import Heading from "../../components/Heading/Heading";
import { Container, Divider, Grid } from "@mui/material";
import Award from "../../components/Tile/Award";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Properties from "../../components/Home/Properties";
import AboutTile from "../../components/Tile/AboutTile";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const awards = [
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "https://www.emaar.com/en/images/awards/award-1.jpg",
      link: "/",
    },
  ];

  const other = [
    {
      title: "EMAAR HOSPITALITY",
      link: "/",
    },
    {
      title: "EMAAR MALLS",
      link: "/",
    },
    {
      title: "BURJ KHALIFA",
      link: "/",
    },
    {
      title: "EMAAR ENTERTAINMENT",
      link: "/",
    },
  ];

  const abouts = [
    {
      title: "Investor Relations",
      desc: "Emaar is a Public Joint Stock Company listed on the Dubai Financial Market. View Emaar’s stock market trends and related data.",
      link: "/",
    },
    {
      title: "Investor Relations",
      desc: "Emaar is a Public Joint Stock Company listed on the Dubai Financial Market. View Emaar’s stock market trends and related data.",
      link: "/",
    },
    {
      title: "Investor Relations",
      desc: "Emaar is a Public Joint Stock Company listed on the Dubai Financial Market. View Emaar’s stock market trends and related data.",
      link: "/",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "60%",
            marginBottom: "-50px",
            padding: "50px",
          }}
        >
          <Container>
            <Heading title="Overview" />
            <h1>ABOUT EMAAR PROPERTIES</h1>
            <p>
              With a net asset value of 138.1B AED (37.6B USD)*, Emaar
              Properties is among the most admired and valuable real estate
              development companies in the world. Emaar, which has established
              competencies in real estate, retail and shopping malls,
              hospitality, and leisure, shapes new lifestyles through its
              commitment to design excellence, build quality, and timely
              delivery.
            </p>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              *As of 31 December 2022 and based on the valuation of assets done
              by third party valuer.
            </p>
          </Container>
        </div>
      </div>
      <Container
        style={{
          marginTop: "100px",
        }}
      >
        <div
          style={{
            height: "80vh",
            backgroundColor: "lightblue",
            display: "flex",
            alignItems: "end",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "60%",
              marginBottom: "-50px",
              padding: "50px",
            }}
          >
            <h2>
              "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST
              VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
            </h2>
            <Heading title="FOUNDER | MOHAMED ALABBAR" />
            <button
              style={{
                backgroundColor: "lightblue",
                border: "none",
                padding: "10px",
                color: "#ffffff",
                fontSize: "20px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Read Founder's letter
            </button>
          </div>
        </div>
        <Divider
          style={{
            marginTop: "150px",
            marginBottom: "150px",
          }}
        />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Featured Awards
          </h1>
          <Grid container spacing={2}>
            {awards.map((award, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Award
                    title={award.title}
                    desc={award.desc}
                    year={award.year}
                    img={award.img}
                    link={award.link}
                  />
                </Grid>
              );
            })}
          </Grid>
          <button
            style={{
              backgroundColor: "lightblue",
              border: "none",
              padding: "10px",
              color: "#ffffff",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            View all awards
          </button>
        </div>
        <Divider
          style={{
            marginTop: "150px",
            marginBottom: "150px",
          }}
        />
        <WhoWeAre />
        <Divider
          style={{
            marginTop: "150px",
            marginBottom: "150px",
          }}
        />
        <Properties />
        <div
          style={{
            paddingBottom: "100px",
          }}
        >
          <Heading title={"More"} />
          <h1>Other EMAAR Business</h1>
          <Grid container spacing={2}>
            {other.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Award title={item.title} link={item.link} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
      <div
        style={{
          paddingTop: "100px",
          backgroundColor: "lightblue",
          paddingBottom: "100px",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {abouts.map((item, index) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <AboutTile
                    title={item.title}
                    desc={item.desc}
                    link={item.link}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;