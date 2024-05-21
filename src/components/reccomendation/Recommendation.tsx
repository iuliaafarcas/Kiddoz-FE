import { Grid, Typography } from "@mui/material";
import DescriptionSection from "./DescriptionSection";
import DetailSection from "./DetailSection";

import { useCallback, useContext, useEffect } from "react";
import { HookContext, HookContextModel } from "../context/HookContext";
import HookInterface from "../../interfaces/HookInterface";
import React from "react";
import { useParams } from "react-router-dom";

const Recommendation = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <Grid
        sx={{
          width: "1100px",

          marginTop: "140px",
          marginLeft: "200px",
          paddingLeft: "50px",
          paddingRight: "30px",

          paddingTop: "10px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        {/* <DetailSection />
        <DescriptionSection /> */}
      </Grid>
      <Grid
        sx={{
          width: "1100px",
          height: "100%",
          marginLeft: "400px",
          paddingLeft: "50px",
          paddingRight: "30px",
          paddingTop: "30px",
          backgroundColor: "white",
        }}
      >
        {id !== undefined && (
          <>
            <Typography sx={{ fontSize: "24px", leftMargin: "50px" }}>
              <b>Job description</b>
            </Typography>

            <Typography sx={{ fontSize: "24px", leftMargin: "50px" }}>
              <b>Offered benefits</b>
            </Typography>

            <Typography sx={{ fontSize: "24px", leftMargin: "50px" }}>
              <b>Candidate description</b>
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default Recommendation;
