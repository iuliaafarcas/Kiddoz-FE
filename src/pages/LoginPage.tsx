import React from "react";
import { Box } from "@mui/material";
import background from "../assets/background.png";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: "0",
        left: "0",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
      }}
    ></Box>
  );
};
export default Login;
