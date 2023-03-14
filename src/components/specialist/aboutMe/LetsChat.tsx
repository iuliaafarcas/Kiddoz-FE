import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@mui/material";
import { FaRegStar } from "react-icons/fa";

const LetsChat = () => {
  const starNo = [1, 2, 3, 4, 5];
  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "55px",
          borderRadius: "12px",
          backgroundColor: "#2A9D8F",
          marginTop: "20px",
          marginLeft: "30px",
        }}
      >
        <Grid
          sx={{
            borderRadius: "12px",
            width: "50px",
            height: "55px",
            backgroundColor: "red",
          }}
        ></Grid>
        <Grid sx={{ width: "200px", height: "55px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "10px",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            Want to talk about anything?
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              marginTop: "-2px",
            }}
          >
            <b>Let's chat!</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default LetsChat;
