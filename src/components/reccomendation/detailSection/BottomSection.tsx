import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../assets/specialist.jpg";
import { Link } from "react-router-dom";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useCallback, useContext, useEffect, useState } from "react";
import SpecialistService from "../../../api/SpecialistService";

const BottomSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;

  const [specialistFirstName, setSpecialistFirstName] = useState("");
  const [specialistLastName, setSpecialistLastName] = useState("");
  const [specialistOcupation, setSpecialistOcupation] = useState("");
  const [specialistImage, setSpecialistImage] = useState("");

  const fetchSpecialist = useCallback(async () => {
    const id = RecommendationObject.specialist;
    try {
      const response = await SpecialistService.getSpecialistById(
        RecommendationObject.specialist.id!
      );
      setSpecialistFirstName(response.data.firstName);
      setSpecialistLastName(response.data.lastName);
      setSpecialistOcupation(response.data.occupation);
      setSpecialistImage(response.data.image);
    } catch (e) {
      console.log(e);
    }
  }, [RecommendationObject.specialist.id]);

  useEffect(() => {
    fetchSpecialist();
  }, [fetchSpecialist]);

  return (
    <>
      <Grid
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
                {specialistFirstName} {specialistLastName}
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
