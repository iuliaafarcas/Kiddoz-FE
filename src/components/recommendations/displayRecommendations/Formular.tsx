import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Box,
  Grid,
  Snackbar,
} from "@mui/material";
import { FormQuestions } from "../../../interfaces/FormQuestions";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import RecommendationService from "../../../api/recommendation/RecommendationService";
import DialogRecommendation from "./DialogRecommendations";

type DialogComponentProps = {
  open: boolean;
  onClose: () => void;
};

const DialogComponent: React.FC<DialogComponentProps> = ({ open, onClose }) => {
  const [answers, setAnswers] = useState<string[]>(Array(15).fill(""));
  const questions = FormQuestions;
  const [isOpened, setIsOpened] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [noRecommendations, setNoRecommendations] = useState(0);
  const [showGeneratedRecommendations, setShowGeneratedRecommendations] =
    useState(false);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const changeValuesFromIndexes = () => {
    const updatedAnswers = answers.map((value, index) => {
      if (
        index === 0 ||
        index === 1 ||
        index === 6 ||
        index === 7 ||
        index === 8
      ) {
        return (6 - parseInt(value)).toString();
      }
      return value; // Keep the rest of the elements unchanged
    });

    setAnswers(updatedAnswers);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      setIsOpened(false);
      return;
    }
    setIsOpened(false);
  };
  const pointsMeaning = [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree",
  ];

  const fetchRecommendationsByAi = async (answers: any) => {
    console.log(answers);
    try {
      const response =
        await RecommendationService.getRecommendationsGeneratedByAI(answers);
      setRecommendations(response.data[1]);
      setNoRecommendations(response.data[0]);
      setShowGeneratedRecommendations(true);
      console.log(response);
    } catch (error) {
      console.log("Error at generation AI recommendations", error);
    }
  };
  const submitAnswers = async () => {
    let areAllAnswered = true;
    answers.map((element) => {
      if (element === "") areAllAnswered = false;
    });
    if (areAllAnswered) {
      changeValuesFromIndexes();
      await fetchRecommendationsByAi(answers);
      setIsOpened(false);
      setShowGeneratedRecommendations(true);
    } else {
      setIsOpened(true);
    }
  };

  const handleRadioChange = (index: number, value: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index - 1] = value;
      return newAnswers;
    });
  };
  return (
    <Grid>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ color: "#264653" }}>
          <b>Get recommendations for your child from our AI</b>
        </DialogTitle>
        <Snackbar open={isOpened} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            You should answer to all questions before submitting the formular
          </Alert>
        </Snackbar>
        <DialogContent>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <DialogContentText>
              Rate how much you agree with each statement on a scale from 1 to 5
              where:{" "}
            </DialogContentText>
            <RadioGroup row sx={{ marginLeft: "20px", paddingBottom: "10px" }}>
              {[1, 2, 3, 4, 5].map((option) => (
                <FormControlLabel
                  sx={{ color: "#bdbdbd" }}
                  key={option}
                  value={option.toString()}
                  control={<Radio disabled />}
                  label={option.toString()}
                />
              ))}
            </RadioGroup>

            <Grid
              sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}
            >
              {pointsMeaning.map((element) => {
                return (
                  <Grid sx={{ width: "50px", marginRight: "7px" }}>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#bdbdbd",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {element}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Box
            sx={{
              height: "1px",
              width: "100%",
              backgroundColor: "#eeeeee",
              marginBottom: "10px",
            }}
          >
            {" "}
          </Box>
          {questions.map((element: any) => {
            return (
              <Grid>
                <DialogContentText
                  sx={{ size: "24px", color: "black", paddingTop: "10px" }}
                >
                  {element.id + "." + element.question}
                </DialogContentText>
                <RadioGroup
                  row
                  sx={{ marginLeft: "20px", paddingBottom: "10px" }}
                >
                  {[1, 2, 3, 4, 5].map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option.toString()}
                      control={
                        <Radio
                          onChange={(event) =>
                            handleRadioChange(element.id, event.target.value)
                          }
                        />
                      }
                      label={option.toString()}
                    />
                  ))}
                </RadioGroup>
                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#eeeeee",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                </Box>
              </Grid>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              textTransform: "none",
              backgroundColor: "#E76F51",
              color: "white",
              ":hover": {
                bgcolor: "#264653",
              },
            }}
          >
            Close
          </Button>
          <Button
            onClick={submitAnswers}
            sx={{
              textTransform: "none",
              backgroundColor: "#2A9D8F",
              color: "white",
              ":hover": {
                bgcolor: "#264653",
              },
            }}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <DialogRecommendation
        open={showGeneratedRecommendations}
        onClose={() => setShowGeneratedRecommendations(false)}
        noRecommendations={noRecommendations}
        recommendations={recommendations}
      />
    </Grid>
  );
};

export default DialogComponent;
