import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Recommendation from "../reccomendation/Recommendation";
import ParentService from "../../api/parent/ParentService";

const TypeNavbar = () => {
  const [isToken, setIsToken] = useState(false);
  const [isSpecialist, setIsSpecialist] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || token == null) setIsToken(false);
    else {
      setIsToken(true);
      getInitials();
    }
  }, [isToken]);
  const getInitials = () => {
    try {
      console.log("bar");
      const logg = ParentService.getUserData();
      logg.then((response) => {
        if (response.data.role === "Specialist") setIsSpecialist(true);
        else setIsSpecialist(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
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

      {isSpecialist && (
        <Button
          onClick={() => handleClick("create")}
          sx={{ color: "white", paddingTop: "10px", textTransform: "unset" }}
        >
          {" "}
          Create recommendation
        </Button>
      )}
    </Box>
  );
};
export default TypeNavbar;
