import { Box, Grid, Typography } from "@mui/material";
import LetsChat from "./LetsChat";
import RateCard from "./RateCard";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import specialistAndChild from "../../../assets/specialistChild.jpg";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import { useContext } from "react";

const DetailSection = () => {
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  return (
    <Grid
      sx={{
        width: "600px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid sx={{ width: "470px" }}>
          <Typography sx={{ fontSize: "30px" }}>
            <b>
              {specialistObject.firstName} {specialistObject.lastName}
            </b>
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#F4A261",
              width: "25px",
              height: "25px",
              marginRight: "10px",
            }}
          />
          <Typography sx={{ fontSize: "20px", float: "right" }}>4.5</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid>
          <Typography sx={{ fontSize: "16px", marginTop: "-7px" }}>
            {specialistObject.occupation}
          </Typography>
          <Typography sx={{ marginTop: "10px", color: "grey" }}>
            <i>{specialistObject.quote}</i>
          </Typography>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <RateCard />
            <LetsChat />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DetailSection;
