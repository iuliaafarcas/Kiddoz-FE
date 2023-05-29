import React from "react";
import { useState, useCallback } from "react";
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
import ParentService from "../../api/parent/ParentService";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = (email: string) => {
    if (emailRegex.test(email) === false) setEmailError("Invalid email format");
    else setEmailError("");
  };

  const isValidPassword = (password: string) => {
    if (password.length < 5)
      setPasswordError("Password must be at least 5 characters long");
    else setPasswordError("");
  };

  const handleSubmit = (event: any) => {
    if (email === "") setEmailError("Field must not be empty");
    if (password === "") setPasswordError("Field must not be empty");

    if (email !== "") setEmailError("");
    if (password !== "") setPasswordError("");

    isValidEmail(email);
    isValidPassword(password);

    if (
      emailError === "" &&
      passwordError === "" &&
      email !== "" &&
      password !== ""
    ) {
      try {
        const logg = ParentService.login(email, password);
        logg.then((response) => {
          localStorage.setItem("token", response.data);
          window.location.href = "/recommendations";
        });

        // response.headers.getAuthorization;
      } catch (e) {
        console.log(e);
      }
    }
  };
  // localStorage.setItem(token)

  //window.location.href = "/recommendations";

  return (
    <GridGlobalStyled container spacing={2} columns={2} id="loginForm">
      <Grid
        sx={{
          textAlign: "left",
          marginLeft: "40px",
          color: "black",
          marginTop: "-230px",
        }}
      >
        <TitleStyled
          variant="h5"
          id="loginFormTitle"
          sx={{ fontSize: "30px", lineHeight: "40px", fontStyle: "regular" }}
        >
          Login
        </TitleStyled>
      </Grid>

      <Grid item xs={4}>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "-150px" }}
        >
          <TextFieldRegisterUserStyled
            id="loginFormEmailField"
            required
            label="Email"
            helperText={emailError}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={(event) => isValidEmail(event.target.value)}
            variant="outlined"
            placeholder="johndoe@yahoo.com"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "30px" }}
        >
          <TextFieldRegisterUserStyled
            id="passwordFormEmailField"
            required
            label="Password"
            type="password"
            helperText={passwordError}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            onBlur={(event) => isValidPassword(event.target.value)}
            variant="outlined"
            autoComplete="off"
          />
        </GridColorStyled>
      </Grid>

      <GridColorStyled
        item
        xs={4}
        sx={{
          marginTop: "20px",
          fontFamily: "Arial",
          fontWeight: "25px",
          fontStyle: "regular",
          color: "#0F3597",
        }}
      >
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#0F3597" }}
        >
          <Grid>Don't have an account yet? Let's create one!</Grid>
        </Link>
      </GridColorStyled>

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
          type="button"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </GridStyled>
    </GridGlobalStyled>
  );
};

export default LoginBox;
