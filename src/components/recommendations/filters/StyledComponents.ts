import { FormControlLabel, styled, Typography } from "@mui/material";

export const TitleStyled = styled(Typography)(() => {
  return {
    textAlign: "left",
    marginLeft: "20px",
    color: "black",
    fontSize: "1.2rem",
    lineHeight: "40px",
  };
});
export const FormControlLabelStyled = styled(Typography)(() => {
  return {
    color: "black",
    fontSize: "0.8rem",
  };
});

export const FormControlStyled = styled(FormControlLabel)(() => {
  return { fontSize: "0.5rem", marginTop: "-10px" };
});
