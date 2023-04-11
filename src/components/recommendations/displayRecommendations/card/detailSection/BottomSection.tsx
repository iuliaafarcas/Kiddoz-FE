import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../../../assets/specialist.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../../../context/RecommendationContext";
import { useCallback, useContext, useEffect, useState } from "react";
import SpecialistService from "../../../../../api/SpecialistService";
import SpecialistInterface from "../../../../../interfaces/SpecialistInterface";

const BottomSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const noLikes = 4.5;

  const [specialist, setSpecialist] = useState<SpecialistInterface>();

  const fetchSpecialist = useCallback(async () => {
    try {
      const response = await SpecialistService.getSpecialistById(
        RecommendationObject.specialist.id!
      );
      const currentSpecialist: SpecialistInterface = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        occupation: response.data.occupation,
        quote: response.data.quote,
        description: response.data.description,
        age: response.data.age,
        domain: { id: 1, name: "psychology" },
        image: response.data.image,
        domainOfActivities: response.data.domainOfActivities,
      };
      setSpecialist(currentSpecialist);
    } catch (e) {
      console.log(e);
    }
  }, [RecommendationObject]);

  useEffect(() => {
    fetchSpecialist();
  }, [setSpecialist, fetchSpecialist]);
  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "70px",
          borderRadius: "20px",
          marginTop: "6px",
        }}
      >
        <Typography sx={{ fontSize: "10px", color: "gray" }}>
          {" "}
          Recommended by
        </Typography>

        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "100px",
              marginTop: "4px",
            }}
            src={specialist?.image}
          />

          <Grid sx={{ marginLeft: "5px" }}>
            <Typography sx={{ fontSize: "12px", color: "black" }}>
              {specialist?.firstName} {specialist?.lastName}
            </Typography>
            <Typography
              sx={{
                marginTop: "-3px",
                fontSize: "10px",
                color: "black",
                marginLeft: "3px",
              }}
            >
              {specialist?.occupation}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          float: "right",
          marginTop: "-20px",
          display: "flex",
          flexDirection: "row",
          paddingRight: "20px",
          paddingBottom: "10px",
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: "#F4A261",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        />
        <Typography
          sx={{
            fontSize: "12px",
            color: "black",
          }}
        >
          {noLikes}
        </Typography>
      </Grid>
    </>
  );
};
export default BottomSection;
