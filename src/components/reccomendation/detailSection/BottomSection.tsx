import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../assets/specialist.jpg";
import { Link } from "react-router-dom";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useCallback, useContext, useEffect, useState } from "react";
import SpecialistService from "../../../api/specialist/SpecialistService";

const BottomSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;

  const [specialistName, setSpecialistName] = useState("");
  const [specialistOcupation, setSpecialistOcupation] = useState("");
  const [specialistImage, setSpecialistImage] = useState("");

  const fetchSpecialist = useCallback(async () => {
    const specialist = RecommendationObject.specialist;
    if (specialist.id !== 0) {
      try {
        const response = await SpecialistService.getSpecialistById(
          RecommendationObject.specialist.id!
        );
        setSpecialistName(response.data.name);
        setSpecialistOcupation(response.data.occupation);
        setSpecialistImage(response.data.image);
      } catch (e) {
        console.log(e);
      }
    }
  }, [RecommendationObject]);

  useEffect(() => {
    fetchSpecialist();
  }, [fetchSpecialist]);

  const handleClick = () => {
    window.scrollTo(0, 0);
    window.location.href = "/specialist/" + RecommendationObject.specialist.id!;
  };

  return (
    <>
      <Grid
        onClick={handleClick}
        sx={{
          width: "250px",
          height: "65px",
          marginTop: "10px",
          borderRadius: "12px",
          marginLeft: "30px",
          backgroundColor: "#white",
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            color: "grey",
            paddingLeft: "10px",
            paddingTop: "5px",
          }}
        >
          {" "}
          Recommended by
        </Typography>

        <Grid
          sx={{ display: "flex", flexDirection: "row", paddingLeft: "10px" }}
        >
          <Box
            component="img"
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "100px",
              marginTop: "4px",
            }}
            src={specialistImage}
          />

          <Grid sx={{ marginLeft: "5px" }}>
            <Link to="/specialist" style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: "12px", color: "black" }}>
                {specialistName}
              </Typography>
            </Link>
            <Typography
              sx={{
                marginTop: "-3px",
                fontSize: "10px",
                color: "black",
                marginLeft: "3px",
              }}
            >
              {specialistOcupation}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BottomSection;
