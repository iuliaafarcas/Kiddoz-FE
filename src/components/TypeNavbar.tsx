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
      }}
    >
      <Button
        onClick={() => handleClick("recommendations")}
        sx={{
          color: "white",
          marginLeft: "120px",
          paddingTop: "10px",
          textTransform: "unset",
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
