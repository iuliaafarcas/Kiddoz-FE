import React from "react";
import { TypeNavbarStyled } from "./StyledComponents";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Recommendation from "./reccomendation/Recommendation";

const TypeNavbar = () => {
  const handleClick = (buttonName: string) => {
    window.scrollTo(0, 0);
    window.location.href = "/" + buttonName;
  };
  return (
    <Box
      sx={{
        backgroundColor: "#2A9D8F",
        height: "45px",
        width: "100%",
        top: "80px",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        zIndex: 2,
      }}
    >
      {/* <Button
        onClick={() => handleClick("/")}
        sx={{
          color: "white",
          marginLeft: "120px",
          paddingTop: "10px",
          textTransform: "unset",
        }}
      >
        {" "}
        Home
      </Button> */}

      <Button
        onClick={() => handleClick("recommendations")}
        sx={{
          color: "white",
          paddingTop: "10px",
          textTransform: "unset",
          marginLeft: "120px",
        }}
      >
        {" "}
        Recommendations
      </Button>

      <Button
        onClick={() => handleClick("specialists")}
        sx={{ color: "white", paddingTop: "10px", textTransform: "unset" }}
      >
        {" "}
        Specialists
      </Button>
    </Box>
  );
};
export default TypeNavbar;
