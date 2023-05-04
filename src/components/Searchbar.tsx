import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Searchbar = () => {
  return (
    <Box sx={{ maxHeight: "40px", right: 0, position: "fixed" }}>
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

      {/* <Link to="/chat">
        <Button
          sx={{
            width: "40px",
            height: "40px",
            marginTop: "15px",
            marginLeft: "5px",
            boxShadow: 0,
            borderRadius: 0,
          }}
        >
          <FontAwesomeIcon
            icon={faComments}
            style={{
              color: "#2A9D8F",
              width: "40px",
              height: "40px",
            }}
          />
        </Button>
      </Link> */}
    </Box>
  );
};
export default Searchbar;
