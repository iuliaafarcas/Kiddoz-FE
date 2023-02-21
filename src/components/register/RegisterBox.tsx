import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import {
  GridColorStyled,
  GridGlobalStyled,
  TitleStyled,
  TextFieldRegisterUserStyled,
  GridStyled,
} from "./StyledComponents";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterBox = () => {
  let navigate = useNavigate();
  // const classes = useStyles();
  const handleSubmit = (event: any) => {
    window.location.href = "/recommendations";
    // event.preventDefault();
    // Add your logic for handling the form submission here
  };

  return (
    <GridGlobalStyled container spacing={2} columns={2} id="loginForm">
      <Grid
        sx={{
          textAlign: "left",
          marginLeft: "40px",
          color: "black",
          marginTop: "-120px",
        }}
      >
        <TitleStyled
          variant="h5"
          id="loginFormTitle"
          sx={{ fontSize: "30px", lineHeight: "40px", fontStyle: "regular" }}
        >
          Register
        </TitleStyled>
      </Grid>

      <Grid item xs={4}>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "-60px" }}
        >
          <TextFieldRegisterUserStyled
            id="firstNameFormEmailField"
            required
            label="First name"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            // onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
            variant="outlined"
            placeholder="John"
            autoComplete="off"
          />
        </GridColorStyled>

        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "25px" }}
        >
          <TextFieldRegisterUserStyled
            id="lastNameFormEmailField"
            required
            label="Last name"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            // onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
            variant="outlined"
            placeholder="Doe"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "25px" }}
        >
          <TextFieldRegisterUserStyled
            id="loginFormEmailField"
            required
            label="Email"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            // onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
            variant="outlined"
            placeholder="johndoe@yahoo.com"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "25px" }}
        >
          <TextFieldRegisterUserStyled
            id="passwordFormEmailField"
            required
            label="Password"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            // onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
            variant="outlined"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "25px" }}
        >
          <TextFieldRegisterUserStyled
            id="confirmPasswordFormEmailField"
            required
            label="Confirm password"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            // onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
            variant="outlined"
            autoComplete="off"
          />
        </GridColorStyled>
      </Grid>

      <GridStyled
        item
        xs={4}
        sx={{
          position: "absolute",
          bottom: "0",
          alignContent: "center",
          marginBottom: "40px",
        }}
      >
        <Button
          variant="contained"
          id="loginFormSubmitButton"
          sx={{
            minWidth: "430px",
            height: "50px",
            textTransform: "unset",
            alignContent: "center",
            marginLeft: "40px",
            color: "white",
            backgroundColor: "#264653",
            borderRadius: "12px",
          }}
          // disabled={
          //   !(email.value && password.value) ||
          //   password.hasErrors ||
          //   email.hasErrors
          // }
          // onClick={handleClick}
          type="submit"
          onClick={handleSubmit}
        >
          Create account
        </Button>
      </GridStyled>
    </GridGlobalStyled>
  );
};

export default RegisterBox;
