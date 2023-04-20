import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, Typography } from "@mui/material";
import specialistSquare from "../../../../assets/specialistSquare.jpg";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../../context/SpecialistContext";
import { useContext, useEffect, useState } from "react";
import SpecialistRatingService from "../../../../api/SpecialistRatingService";

const SpecialistCard = () => {
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  const [noStars, setNoStars] = useState();

  const handleClick = () => {
    window.scrollTo(0, 0);
    window.location.href = "/specialist/" + specialistObject.id!;
  };
  const fetchRating = async () => {
    try {
      const response = await SpecialistRatingService.getRatingBySpecialistId(
        specialistObject.id!
      );
      setNoStars(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchRating();
  });
  return (
    <Grid
      sx={{
        width: "200px",
        height: "260px",
        backgroundColor: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
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
            src={specialistObject.image}
          />
        </Grid>

        {noStars !== 0 && (
          <Grid
            sx={{
              height: "30px",
              width: "45px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#F4A261",
                width: "15px",
                height: "15px",
                marginTop: "2px",
              }}
            />
            <Typography sx={{ marginLeft: "4px", fontSize: "14px" }}>
              {noStars}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Typography
        sx={{
          fontSize: "18px",
          textAlign: "center",
          marginTop: "30px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <b>{specialistObject.name}</b>
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "14px", marginTop: "8px" }}
      >
        {specialistObject.occupation}
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
