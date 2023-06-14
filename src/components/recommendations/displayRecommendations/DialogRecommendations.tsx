import {
  Alert,
  AlertProps,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RecommendationContextProvider } from "../../context/RecommendationContext";
import Card from "./Card";

type DialogComponentProps = {
  open: boolean;
  onClose: () => void;
  noRecommendations: number;
  recommendations: any;
  message: string;
};

const DialogRecommendation: React.FC<DialogComponentProps> = ({
  open,
  onClose,
  noRecommendations,
  recommendations,
  message,
}) => {
  const [isOpened, setIsOpened] = useState(false);

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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle sx={{ color: "#264653" }}>
        <b>Based on your answers, we recommend these activities</b>
      </DialogTitle>

      <DialogContent>
        <Typography maxWidth="650px" sx={{ marginBottom: "30px" }}>
          {message}
        </Typography>
        <Grid>
          {noRecommendations ? (
            recommendations?.map((element: any) => {
              return (
                <RecommendationContextProvider value={element} key={element.id}>
                  <Card />
                </RecommendationContextProvider>
              );
            })
          ) : (
            <Typography sx={{ marginBottom: "20px", color: "grey" }}>
              No results found
            </Typography>
          )}
        </Grid>
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
      </DialogActions>
    </Dialog>
  );
};
export default DialogRecommendation;
