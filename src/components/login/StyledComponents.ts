import { styled } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GridGlobalStyled = styled(Grid)(() => {
  return {
    width: "550px",
    height: "650px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    color: "white",
    position: "absolute",
    top: "52%",
    bottom: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignContent: "center",
    justifyContent: "justify",

    marginLeft: "20%",
  };
});

export const GridColorStyled = styled(Grid)(({ theme }) => {
  return {
    textAlign: "center",
    color: "black",
    borderColor: theme.palette.primary.main,
  };
});

export const TitleStyled = styled(Typography)(() => {
  return {
    fontFamily: "Inter",
    fontWeight: "25px",
    fontStyle: "regular",
  };
});

export const TextFieldStyled = styled(TextField)(() => {
  return {
    "& fieldset": {
      borderColor: "#42a5f5",
      borderWidth: 2,
      borderRadius: 12,
    },
    "& label": {
      color: "#42a5f5",
    },
    input: {
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "black",
      },
      color: "black !important",
      backgroundColor: "#64b5f6",
      borderRadius: 12,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& label.Mui-focused": {
      color: "black",
    },
  };
});

export const TextFieldRegisterUserStyled = styled(TextFieldStyled)(
  ({ theme }) => {
    return {
      width: "75%",
      "& fieldset": {
        borderColor: "black",
        borderWidth: 2,
      },
      "& label": {
        color: "black",
      },
      input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "black",
        },
        color: "black",
        backgroundColor: "white",
      },
    };
  }
);
export const GridStyled = styled(Grid)(() => {
  return {
    textAlign: "center",
  };
});
