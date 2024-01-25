import React from "react";
import {
  BottomNavigation,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const Footer = () => {
  const footerContent = [
    {
      title: "About Emerald Prestige",
      subs: [
        {
          subtitle: "who we are",
          link: "/about",
        },
        {
          subtitle: "contact us",
          link: "/about",
        },
        {
          subtitle: "careers",
          link: "/about",
        },
        {
          subtitle: "investor relations",
          link: "/about",
        },
        {
          subtitle: "press releases",
          link: "/about",
        },
        {
          subtitle: "Emerald Prestige blogs & real estate insights",
          link: "/about",
        },
        {
          subtitle: "mortgage calculator",
          link: "/about",
        },
        {
          subtitle: "gifts & scam disclaimer",
          link: "/about",
        },
        {
          subtitle: "Emerald Prestige sustainability",
          link: "/about",
        },
      ],
    },
    {
      title: "Communities",
      subs: [
        {
          subtitle: "dubai creek harbour",
          link: "/about",
        },
        {
          subtitle: "downtown dubai",
          link: "/about",
        },
        {
          subtitle: "dubai marina",
          link: "/about",
        },
        {
          subtitle: "dubai hills estate",
          link: "/about",
        },
        {
          subtitle: "Emerald Prestige south",
          link: "/about",
        },
        {
          subtitle: "arabian ranches",
          link: "/about",
        },
        {
          subtitle: "Emerald Prestige beachfront",
          link: "/about",
        },
      ],
    },
    {
      title: "Latest Launch",
      subs: [
        {
          subtitle: "aeon",
          link: "/about",
        },
        {
          subtitle: "address residences",
          link: "/about",
        },
        {
          subtitle: "park gate",
          link: "/about",
        },
        {
          subtitle: "avonlea",
          link: "/about",
        },
        {
          subtitle: "bayline",
          link: "/about",
        },
        {
          subtitle: "club drive",
          link: "/about",
        },
        {
          subtitle: "alana",
          link: "/about",
        },
        {
          subtitle: "parkside views residence",
          link: "/about",
        },
        {
          subtitle: "nima",
          link: "/about",
        },
        {
          subtitle: "clearpoint",
          link: "/about",
        },
      ],
    },
    {
      title: "Emerald Prestige International",
      subs: [
        {
          subtitle: "ksa",
          link: "/about",
        },
        {
          subtitle: "india",
          link: "/about",
        },
        {
          subtitle: "pakistan",
          link: "/about",
        },
        {
          subtitle: "egypt",
          link: "/about",
        },
        {
          subtitle: "turkey",
          link: "/about",
        },
        {
          subtitle: "morocco",
          link: "/about",
        },
        {
          subtitle: "china",
          link: "/about",
        },
      ],
    },
  ];

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
              <h2>Emerald Prestige</h2>
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
              <button className="btn btn-primary btn-sub">SUBSCRIBE</button>
            </div>
          </Grid>
        </Grid>
        <Divider
          style={{
            margin: "50px 0",
          }}
        />
        <Grid container spacing={2}>
          {footerContent.map((item, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <h2>{item.title}</h2>
                {item.subs.map((sub, index) => {
                  return (
                    <p key={index}>
                      <a href={sub.link}>{sub.subtitle}</a>
                    </p>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
        {/* </BottomNavigation> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <Typography>Privacy Policy</Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginRight: "20px" }}
          />
          <div style={{ marginRight: "20px" }}>
            <Typography>
              Emerald Prestige Properties Terms and Conditions
            </Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginRight: "20px" }}
          />
          <div>
            <Typography>Country and Language</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
