import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import Award from "../../components/Tile/Award";

const Communities = () => {
  const coms = [
    {
      title: "Community 1",
      desc: "This is the description for Community 1",
      link: "/community-1",
      year: "Apartments, Townhouses and Sea Villas",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 2",
      desc: "This is the description for Community 2",
      link: "/community-2",
      year: "Apartments, Townhouses and Sea Villas",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 3",
      desc: "This is the description for Community 3",
      link: "/community-3",
      year: "Apartments, Townhouses and Sea Villas",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 4",
      desc: "This is the description for Community 4",
      link: "/community-4",
      year: "Hills and Gardens",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 5",
      desc: "This is the description for Community 5",
      link: "/community-5",
      year: "Luxury Villas",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 6",
      desc: "This is the description for Community 6",
      link: "/community-6",
      year: "Urban Living",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 7",
      desc: "This is the description for Community 7",
      link: "/community-7",
      year: "Residential Towers",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 8",
      desc: "This is the description for Community 8",
      link: "/community-8",
      year: "Golf Estates",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 9",
      desc: "This is the description for Community 9",
      link: "/community-9",
      year: "Marina Residences",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 10",
      desc: "This is the description for Community 10",
      link: "/community-10",
      year: "Commercial Spaces",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 11",
      desc: "This is the description for Community 11",
      link: "/community-11",
      year: "Waterfront Living",
      img: "/assets/com-1.jpg",
    },
    {
      title: "Community 12",
      desc: "This is the description for Community 12",
      link: "/community-12",
      year: "Mixed-Use Development",
      img: "/assets/com-1.jpg",
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {coms.map((item, index) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Award
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                  year={item.year}
                  img={item.img}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Divider style={{ width: "50%" }} />
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Communities;
