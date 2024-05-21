import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
import { HookContext, HookContextModel } from "../../context/HookContext";
import { useContext } from "react";
import React from "react";

const TopSection = () => {
  const { HookObject } = useContext(HookContext) as HookContextModel;
  return (
    <>
      <Grid
        sx={{
          width: "540px",
          height: "65px",
          borderRadius: "20px",

          marginTop: "15px",
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid sx={{ width: "540px" }}>
          <Typography
            sx={{ fontSize: "30px", color: "black", font: "bold georgia" }}
          >
            <b>SAP ABAP Intern with German</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default TopSection;
