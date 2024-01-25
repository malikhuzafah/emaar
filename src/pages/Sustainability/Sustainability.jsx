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
      img: "/assets/sus-our.jpg",
      link: "/",
    },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
    // {
    //   title: "Our Stories",
    //   img: "/assets/sustainability.jpg",
    //   link: "/",
    // },
  ];

  return (
    <div>
      <div
        style={{
          height: "80vh",
          backgroundImage: "url(/assets/sustainability.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            At Emerald Prestige, we view sustainability as an integral part of
            our existence—an investment not only in the future of society but
            also in our own. With this conviction, we are confident that
            incorporating sustainability into our business strategy will yield
            progress in economic, environmental, and social dimensions. <br />
            <br /> Our commitment to sustainability at Emerald Prestige is
            anchored in the pursuit of Sustainable Development Goals and
            reinforced by our Code of Conduct, which shapes the conduct of all
            employees in their interactions with colleagues, local communities,
            and the environment. Operationally, we adhere to a comprehensive set
            of procedures and policies aligned with both national regulations
            and international standards.
            <br />
            <br /> These guiding principles influence our approach to providing
            high-quality employment, ensuring workplace safety, promoting
            employee well-being, and fostering opportunities for professional
            growth. Furthermore, they shape how we engage with and communicate
            with our investors, communities, governmental entities, and
            suppliers within our operational areas, as well as guide our ongoing
            efforts to monitor and enhance our sustainable performance.
          </p>
          <button className="btn btn-secondary">
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
                  <SustainabilityTile
                    title={item.title}
                    link={item.link}
                    img={item.img}
                  />
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
