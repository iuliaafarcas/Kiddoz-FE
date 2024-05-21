import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HookContext, HookContextModel } from "../../context/HookContext";
import { useCallback, useContext, useEffect, useState } from "react";
import SpecialistService from "../../../api/specialist/SpecialistService";
import React from "react";

const BottomSection = () => {
  const { HookObject } = useContext(HookContext) as HookContextModel;

  const [specialistName, setSpecialistName] = useState("");
  const [specialistOcupation, setSpecialistOcupation] = useState("");
  const [specialistImage, setSpecialistImage] = useState("");

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Grid
        onClick={handleClick}
        sx={{
          width: "250px",
          height: "65px",
          marginTop: "40px",
          borderRadius: "12px",

          backgroundColor: "#white",
        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "row", paddingLeft: "10px" }}
        >
          <Box
            component="img"
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "100px",
              marginTop: "4px",
            }}
          />

          <Grid sx={{ marginLeft: "5px" }}>
            <Typography sx={{ fontSize: "12px", color: "black" }}></Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BottomSection;
