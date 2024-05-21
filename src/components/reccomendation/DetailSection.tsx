import { Grid } from "@mui/material";
import BottomSection from "./detailSection/BottomSection";
import MiddleSection from "./detailSection/MiddleSection";
import TopSection from "./detailSection/TopSection";
import React from "react";

const DetailSection = () => {
  return (
    <>
      <Grid
        sx={{
          width: "540px",
          height: "400px",
          background: "white",
        }}
      >
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </Grid>
    </>
  );
};
export default DetailSection;
