import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@mui/material";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import RecommendationRatingService from "../../../api/recommendation/RecommendationRatingService";
import { useParams } from "react-router-dom";
import ParentService from "../../../api/parent/ParentService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const RateCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const [noStar, setNoStar] = useState<number>(0);
  const [parentId, setParentId] = useState(0);
  const [isOpenSnackbar, setIsSnackbarOpen] = useState(false);

  const getParentId = () => {
    if (
      localStorage.getItem("token") === "" ||
      localStorage.getItem("token") === null
    ) {
      setIsSnackbarOpen(true);
      setNoStar(0);
    } else {
      try {
        const logg = ParentService.getUserData();
        logg.then((response) => {
          setParentId(response.data.id);
          fetchRating(RecommendationObject.id!, parentId, noStar);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleClick = (no: number) => {
    setNoStar(no);
    getParentId();
  };
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };
  const fetchRating = async (
    recommendationId: number,
    parentId: number,
    noStar: number
  ) => {
    try {
      const response =
        await RecommendationRatingService.addRecommendationRating(
          recommendationId,
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
          backgroundColor: "#264653 ",
          marginLeft: "30px",
          marginTop: "20px",
        }}
      >
        <Snackbar
          open={isOpenSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            You can not rate a recommendation if you are not loged in!
          </Alert>
        </Snackbar>

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
            const starColor = element <= noStar ? "#ffff00" : "white"; // Set color to red if element is 5, otherwise white

            return (
              <FontAwesomeIcon
                icon={faStar}
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
