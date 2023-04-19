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
      <Link to="/favorites">
        <Button
          sx={{
            width: "40px",
            height: "40px",
            marginTop: "15px",
            marginLeft: "100px",
            boxShadow: 0,
            borderRadius: 0,
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#2A9D8F",
              width: "40px",
              height: "40px",
            }}
          />
        </Button>
      </Link>

      <Link to="/chat">
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
      </Link>

      <Link to="/profile">
        <Button
          sx={{
            width: "40px",
            height: "40px",
            marginTop: "15px",
            marginLeft: "5px",
            marginRight: "70px",

            boxShadow: 0,
            borderRadius: 0,
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{
              color: "#2A9D8F",
              width: "40px",
              height: "40px",
            }}
          />
        </Button>
      </Link>
    </Box>
  );
};
export default Searchbar;
