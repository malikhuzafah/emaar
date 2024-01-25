import { Container, Grid } from "@mui/material";
import React from "react";
import OfferTile from "../../components/Tile/OfferTile";
import Footer from "../../components/Footer/Footer";

const Offers = () => {
  const offers = [
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
    {
      title: "DUBAI HILLS PARK - SUSTAINABILITY PRIZE",
      desc: "LANDSCAPE MIDDLE EAST AWARDS IN PARKS & RECREATION",
      link: "/",
      img: "/assets/com-1.jpg",
    },
  ];

  return (
    <div>
      <Container>
        <h1>Offers</h1>
        <Grid container spacing={2}>
          {offers.map((item, index) => {
            return (
              <Grid item sm={12} md={6}>
                <OfferTile
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
      <Footer />
    </div>
  );
};

export default Offers;
