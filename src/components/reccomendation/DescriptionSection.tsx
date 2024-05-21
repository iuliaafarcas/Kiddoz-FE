import { Button, Grid, Typography } from "@mui/material";
import { HookContext, HookContextModel } from "../context/HookContext";
import { useContext } from "react";
import React from "react";

const DescriptionSection = () => {
  const { HookObject } = useContext(HookContext) as HookContextModel;
  return (
    <Grid
      sx={{
        marginLeft: "50px",
        display: "flex",
        flexDirection: "row",
        marginTop: "25px",
      }}
    >
      <Grid sx={{ maxWidth: "350px" }}>
        <Typography sx={{ fontSize: "20px" }}>
          <b> Details about the internship</b>
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Start date:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          End date:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Paid position:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Starting salary:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Highest salary:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Currency:
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "1030px",
            textAlign: "justify",
          }}
        >
          Hiring possibility:
        </Typography>
      </Grid>
      {/* <Grid
        sx={{
          width: "100px",
          height: "70px",
          background: "#2A9D8F",
          borderRadius: "8px",
          textAlign: "center",
          paddingTop: "10px",
          marginLeft: "-30px",
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "white" }}>is</Typography>

        <Typography sx={{ fontSize: "14px", color: "white" }}>
          <b>AVAILABLE</b>
        </Typography>
      </Grid> */}
      <Grid
        sx={{
          width: "120px",
          height: "70px",
          background: "#E76F51",
          borderRadius: "8px",
          textAlign: "center",
          paddingTop: "10px",
          marginLeft: "-30px",
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "white" }}>is</Typography>

        <Typography sx={{ fontSize: "14px", color: "white" }}>
          <b>UNAVAILABLE</b>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default DescriptionSection;
