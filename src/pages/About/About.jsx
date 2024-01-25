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
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      year: "2023",
      img: "/assets/about-award.jpg",
      link: "/",
    },
  ];

  const other = [
    {
      title: "Emerald Prestige HOSPITALITY",
      img: "/assets/hospitality.jpg",
      link: "/",
    },
    {
      title: "Emerald Prestige MALLS",
      img: "/assets/malls.jpg",
      link: "/",
    },
    {
      title: "BURJ KHALIFA",
      img: "/assets/burj.jpg",
      link: "/",
    },
    {
      title: "Emerald Prestige ENTERTAINMENT",
      img: "/assets/entertainment.jpg",
      link: "/",
    },
  ];

  const abouts = [
    {
      title: "Investor Relations",
      desc: "Emerald Prestige is a publicly traded Joint Stock Company, and its shares are listed on the Dubai Financial Market. Explore the stock market trends and associated data for Emerald Prestige.",
      link: "/",
      img: "/assets/about-relations.jpg",
    },
    {
      title: "Corporate Sustainability",
      desc: "We view sustainability as a cornerstone of our existence, representing an investment in the future for both society and ourselves.",
      link: "/",
      img: "/assets/sus-our.jpg",
    },
    {
      title: "Foundation",
      desc: "We view sustainability as a cornerstone of our existence, representing an investment in the future for both society and ourselves.",
      img: "/assets/foundation.jpg",
      link: "/",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "end",
          backgroundImage: "url(/assets/about.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            <h1>ABOUT Emerald Prestige</h1>
            <p>
              Emerald Prestige Properties stands as one of the world's esteemed
              and valuable real estate development firms, boasting a net asset
              value of 138.1 billion AED (37.6 billion USD)*. The company,
              renowned for its expertise in real estate, retail and shopping
              malls, hospitality, and leisure, is dedicated to crafting
              innovative lifestyles through a steadfast commitment to design
              excellence, construction quality, and punctual project delivery.
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
            display: "flex",
            alignItems: "end",
            backgroundImage: "url(/assets/about-founder.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
            <Heading title="FOUNDER | Muhammad Talha" />
            <button className="btn btn-secondary">Read Founder's letter</button>
          </div>
        </div>
        <Divider
          style={{
            marginTop: "150px",
            marginBottom: "150px",
          }}
        />
        {/* <div
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
          <button className="btn btn-primary">View all awards</button>
        </div> */}
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
          <h1>Other Emerald Prestige Business</h1>
          <Grid container spacing={2}>
            {other.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Award title={item.title} link={item.link} img={item.img} />
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
                    img={item.img}
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
