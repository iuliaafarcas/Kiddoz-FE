import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, Typography } from "@mui/material";
import specialistSquare from "../../../../assets/specialistSquare.jpg";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FaBookmark } from "react-icons/fa";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SpecialistCard = () => {
  return (
    <Grid
      sx={{
        width: "200px",
        height: "260px",
        backgroundColor: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        boxShadow: 3,
        marginRight: "40px",
        marginBottom: "40px",
      }}
    >
      <Grid
        sx={{
          width: "230px",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
        }}
      >
        <Grid>
          <Box
            component="img"
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "100%",
              boxShadow: 5,
              marginTop: "20px",
              marginLeft: "50px",
            }}
            src={specialistSquare}
          />
        </Grid>
        <Grid
          sx={{
            height: "30px",
            width: "45px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <FaBookmark
            stroke="#F4A261"
            strokeWidth="40px"
            color="#F4A261"
            size="25px"
            cursor="pointer"
            style={{
              float: "right",
              height: "50px",
              marginTop: "-17px",
              marginRight: "10px",
            }}
          /> */}
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#F4A261",
              width: "20px",
              height: "20px",
              marginLeft: "-2px",
            }}
          />
          <Typography sx={{ marginLeft: "2px", fontSize: "14px" }}>
            4.5
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{ fontSize: "18px", textAlign: "center", marginTop: "30px" }}
      >
        <b>Saalvadore de More </b>
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "14px", marginTop: "8px" }}
      >
        Dermatolog
      </Typography>
      <Grid
        sx={{
          marginTop: "15px",
          height: "50px",
          width: "200px",
          backgroundColor: "#2A9D8F",
          borderRadius: "0 0 20px 20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faComments}
          style={{
            height: "20px",
            width: "20px",
            color: "white",
          }}
        />
        <Typography
          sx={{ color: "white", marginLeft: "15px", fontSize: "14px" }}
        >
          Chat with me
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SpecialistCard;
