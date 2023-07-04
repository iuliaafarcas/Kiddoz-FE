import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ParentService from "../../api/parent/ParentService";
const Searchbar = () => {
  const [isToken, setIsToken] = useState(false);
  const [initials, setInitials] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || token == null) setIsToken(false);
    else {
      setIsToken(true);
      getInitials();
    }
  }, [isToken]);
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const getFirstLetters = (name: string) => {
    let nameSeparator = name.split(" ");
    return nameSeparator[0];
  };
  const getInitials = () => {
    try {
      console.log("get initials");
      const logg = ParentService.getUserData();
      logg.then((response) => {
        setInitials(
          "Welcome back, " + getFirstLetters(response.data.name) + "!"
        );
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ maxHeight: "40px", right: 0, position: "fixed" }}>
      {isToken && (
        <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
          <Typography
            sx={{
              textAlign: "center",
              font: "Arial",
              marginRight: "20px",
              color: "264653",
              marginTop: "10px",
            }}
          >
            <b>
              <i>{initials}</i>
            </b>
          </Typography>
          {/* <Box
            sx={{
              borderRadius: "50%",

              marginRight: "20px",
              width: "40px",
              height: "40px",
              border: "3px solid #2A9D8F ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#264653  ",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              <b>{initials}</b>
            </Typography>
          </Box> */}
          <LogoutIcon
            sx={{
              color: "#264653 ",
              width: "40px",
              height: "40px",
              marginRight: "120px",
              cursor: "pointer",
            }}
            onClick={logOut}
          />
        </Grid>
      )}
      {!isToken && (
        <Grid>
          <Link to="/login">
            <Button
              sx={{
                width: "100px",
                height: "40px",
                marginTop: "15px",
                marginLeft: "100px",
                boxShadow: 0,
                borderRadius: "40px",
                textTransform: "none",
                color: "#26465",
                border: "1px solid #26465",
              }}
              variant="outlined"
            >
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button
              sx={{
                width: "100px",
                height: "40px",
                marginTop: "15px",
                marginLeft: "10px",
                marginRight: "50px",
                boxShadow: 0,
                borderRadius: "40px",
                textTransform: "none",
                color: "white",
                backgroundColor: "#26465",
              }}
              variant="contained"
            >
              Register
            </Button>
          </Link>
        </Grid>
      )}
    </Box>
  );
};
export default Searchbar;
