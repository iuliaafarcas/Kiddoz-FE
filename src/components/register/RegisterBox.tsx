import React, { useCallback } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import {
  GridColorStyled,
  GridGlobalStyled,
  TitleStyled,
  TextFieldRegisterUserStyled,
  GridStyled,
} from "./StyledComponents";
import ParentService from "../../api/ParentService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterBox = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [matchPasswordError, setMatchPasswordError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = (email: string) => {
    if (emailRegex.test(email) === false || email === "")
      setEmailError("Invalid email format");
    else setEmailError("");
  };

  const isValidPassword = (password: string) => {
    if (password.length < 5 || password === "")
      setPasswordError("Password must be at least 5 characters long");
    else setPasswordError("");
  };
  const isValidFirstName = (name: string) => {
    if (name === "") setFirstNameError("First name is required");
    else setFirstNameError("");
  };

  const doesPasswordsMatch = (password: string, confirmPassword: string) => {
    if (password != confirmPassword)
      setMatchPasswordError("Passwords don't match");
    else setMatchPasswordError("");
  };

  const handleSubmit = (event: any) => {
    // if (email === "") setEmailError("Field must not be empty");
    // if (password === "") setPasswordError("Field must not be empty");
    // if (firstName === "") setFirstNameError("Field must not be empty");
    // if (lastName === "") setLastNameError("Field must not be empty");

    if (email !== "") setEmailError("");
    if (password !== "") setPasswordError("");
    if (firstName !== "") setFirstNameError("");

    isValidEmail(email);
    isValidPassword(password);
    isValidFirstName(firstName);
    doesPasswordsMatch(password, confirmPassword);

    if (
      email !== "" &&
      firstName !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      emailError === "" &&
      passwordError === "" &&
      firstNameError === "" &&
      matchPasswordError === ""
    ) {
      try {
        const response = ParentService.addParent(firstName, email, password);
        window.location.href = "/login";
      } catch (error) {
        console.error("Error register:", error);
      }
    }
  };

  return (
    <GridGlobalStyled container spacing={2} columns={2} id="loginForm">
      <Grid
        sx={{
          textAlign: "left",
          marginLeft: "40px",
          color: "black",
          marginTop: "-110px",
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
          sx={{ marginLeft: "-40px", marginTop: "-50px" }}
        >
          <TextFieldRegisterUserStyled
            id="firstNameFormEmailField"
            required
            label="Name"
            helperText={firstNameError}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            onBlur={(event) => isValidFirstName(event.target.value)}
            variant="outlined"
            placeholder="John"
            autoComplete="off"
          />
        </GridColorStyled>

        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "20px" }}
        >
          <TextFieldRegisterUserStyled
            id="loginFormEmailField"
            required
            label="Email"
            // name={LoginFormFields.email}
            helperText={emailError}
            // error={email.hasErrors}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={(event) => isValidEmail(event.target.value)}
            // value={email.value}
            variant="outlined"
            placeholder="johndoe@yahoo.com"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "20px" }}
        >
          <TextFieldRegisterUserStyled
            id="passwordFormEmailField"
            required
            label="Password"
            type="password"
            // name={LoginFormFields.email}
            helperText={passwordError}
            // error={email.hasErrors}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={(event) => isValidPassword(event.target.value)}
            // value={email.value}
            variant="outlined"
            autoComplete="off"
          />
        </GridColorStyled>
        <GridColorStyled
          item
          xs={4}
          sx={{ marginLeft: "-40px", marginTop: "20px" }}
        >
          <TextFieldRegisterUserStyled
            id="confirmPasswordFormEmailField"
            required
            label="Confirm password"
            type="password"
            // name={LoginFormFields.email}
            helperText={matchPasswordError}
            // error={email.hasErrors}
            onChange={(event) => setConfirmPassword(event.target.value)}
            onBlur={(event) => doesPasswordsMatch(event.target.value, password)}
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
          type="button"
          onClick={handleSubmit}
        >
          Create account
        </Button>
      </GridStyled>
    </GridGlobalStyled>
  );
};

export default RegisterBox;
