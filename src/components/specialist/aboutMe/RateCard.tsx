import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import SpecialistRatingService from "../../../api/specialist/SpecialistRatingService";
import ParentService from "../../../api/parent/ParentService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const RateCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  const [noStar, setNoStar] = useState<number>(0);
  const [parentId, setParentId] = useState(0);
  const [isOpenSnackbar, setIsSnackbarOpen] = useState(false);
  const getParentId = () => {
    if (
      localStorage.getItem("token") === "" ||
      localStorage.getItem("token") === null
    ) {
      setNoStar(0);
    } else {
      try {
        console.log(localStorage.getItem("token"));
        const logg = ParentService.getUserData();
        logg.then((response) => {
          setParentId(response.data.id);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    getParentId();
  }, []);

  const handleClick = (no: number) => {
    if (parentId === 0) setIsSnackbarOpen(true);
    else {
      setNoStar(no);
      console.log("parent: ");

      console.log(parentId);
      fetchRating(specialistObject.id!, parentId, no);
    }
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
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
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
            You can not rate a specialist if you are not loged in!
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
