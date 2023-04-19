import React from "react";
import { TypeNavbarStyled } from "./StyledComponents";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "row",
        zIndex: 2,
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
