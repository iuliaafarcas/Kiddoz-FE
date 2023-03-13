import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@mui/material";
import { FaRegStar } from "react-icons/fa";

const RateCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "55px",
          borderRadius: "12px",
          backgroundColor: "#F4A261",
          marginLeft: "30px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "10px",
            textAlign: "center",
            paddingTop: "5px",
          }}
        >
          How would you rate this?
        </Typography>

        <Grid
          sx={{
            display: "flex",
            marginLeft: "50px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {starNo.map((element) => {
            return (
              <FaRegStar
                style={{
                  marginTop: "5px",
                  width: "30px",
                  height: "20px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </Grid>
        {/* 
        <FaRegStar
          style={{
            marginTop: "5px",
            width: "40px",
            height: "20px",
            color: "white",
            cursor: "pointer",
          }}
        /> */}
        {/* </Button> */}
      </Grid>
    </>
  );
};
export default RateCard;
