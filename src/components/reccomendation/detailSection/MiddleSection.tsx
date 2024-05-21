import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  HookContext,
  HookContextModel,
} from "../../context/HookContext";
import { useContext, useState } from "react";
import React from "react";

const MiddleSection = () => {
  const { HookObject } = useContext(
    HookContext
  ) as HookContextModel;
  const [openDialog, setOpenDialog] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const displayDialog = () => {
    if (errorMessage !== "") {
      setIsOpened(true);
      return;
    }
    setOpenDialog(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setIsOpened(false);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid
        sx={{
          maxWidth: "540px",
        }}
      >
      
      </Grid>
    </>
  );
};
export default MiddleSection;
