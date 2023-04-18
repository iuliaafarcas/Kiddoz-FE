import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import SpecialistRatingService from "../../../api/SpecialistRatingService";

const RateCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  const [noStar, setNoStar] = useState<number>(0);
  const parentId = 302;

  const handleClick = (no: number) => {
    console.log(specialistObject.id);
    setNoStar(no);
    fetchRating(specialistObject.id!, parentId, no);
  };

  const fetchRating = async (
    specialistId: number,
    parentId: number,
    noStar: number
  ) => {
    try {
      const response = await SpecialistRatingService.addSpecialistRating(
        specialistId,
        parentId,
        noStar
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "55px",
          borderRadius: "12px",
          backgroundColor: "#264653",
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
          How would you rate the interaction?
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
            const starColor = element <= noStar ? "#ffff00" : "white"; // Set color to red if element is 5, otherwise white

            return (
              <FaRegStar
                key={element}
                style={{
                  marginTop: "5px",
                  width: "30px",
                  height: "20px",
                  color: starColor,
                  cursor: "pointer",
                }}
                onClick={() => handleClick(element)}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default RateCard;
