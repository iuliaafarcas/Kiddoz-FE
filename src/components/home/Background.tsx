import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { Button, Grid, Typography } from "@mui/material";
import logo from "../../assets/logo.jpeg";
import communication from "../../assets/mainPage.png";
import { Link } from "react-router-dom";
import IntroSection from "./Intro";

const CustomShapeDividerTop = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
});

const Svg = styled(SvgIcon)({
  position: "relative",
  display: "block",
  width: "calc(159% + 1.3px)",
  height: "93px",
  zIndex: 1,
});

const ShapeFill = styled("path")({
  fill: "#2A9D8F",
});

const Root = styled(Button)({
  width: "140px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  textTransform: "none",
  letterSpacing: "1px",
  border: "none",
  fontFamily: "Arial",
  fontSize: "16px",
  position: "relative",
  color: "black",
  //   backgroundColor: "transparent",
  transition: ".2s cubic-bezier(0.19, 1, 0.22, 1)",
  //   opacity: 0.6,
  "&::after": {
    content: '""',
    borderBottom: "3px double rgb(244, 162, 97)",
    width: 0,
    height: "100%",
    position: "absolute",
    marginTop: "-5px",
    top: 0,
    left: "5px",
    visibility: "hidden",
    opacity: 1,
    transition: ".2s linear",
  },
  "& .icon": {
    transform: "translateX(0%)",
    transition: ".2s linear",
    animation: "attention 1.2s linear infinite",
  },
  "&:hover::after": {
    visibility: "visible",
    opacity: 0.7,
    width: "90%",
  },
  "&:hover": {
    letterSpacing: "2px",
    opacity: 1,
  },
  "&:hover > .icon": {
    transform: "translateX(30%)",
    animation: "none",
  },
});

const MyComponent = () => {
  return (
    <Grid>
      <CustomShapeDividerTop>
        <Svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <ShapeFill d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" />
        </Svg>
        <Grid
          sx={{ marginLeft: "100px", display: "flex", flexDirection: "row" }}
        >
          <Link
            to="/recommendations"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Root sx={{ width: "150px" }}>Recommendations</Root>
          </Link>
          <Link to="/specialists" style={{ textDecoration: "none" }}>
            <Root>Specialists</Root>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Root sx={{ width: "100px" }}>Register </Root>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Root sx={{ width: "100px" }}>Login </Root>
          </Link>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            sx={{
              marginTop: "20px",
              marginLeft: "550px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "500px",
                height: "200px",
                borderRadius: "20px",
                marginRight: "50px",
              }}
              src={logo}
            />
            <Typography
              sx={{
                marginLeft: "50px",
                width: "500px",
                marginTop: "-25px",
                fontWeight: "10",
              }}
              // fontFamily="'Lato', sans-serif"
              fontFamily="Arial"
              fontSize={16}
              fontWeight="bold"
              color="black"
            >
              Where parenting meets expertise and raising kids becomes a breeze
            </Typography>
          </Grid>
          <Box
            component="img"
            sx={{
              width: "250px",
              height: "200px",
              borderRadius: "20px",
              marginTop: "-14px",
              marginLeft: "-50px",
            }}
            src={communication}
          />
        </Grid>
        <IntroSection />
      </CustomShapeDividerTop>
    </Grid>
  );
};

export default MyComponent;
