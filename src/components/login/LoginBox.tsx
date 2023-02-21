import React from "react";
import { useState, useCallback, useMemo } from "react";
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

enum LoginFormFields {
  email = "email",
  password = "password",
}
const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formFieldsManagers = useMemo(
    () => ({
      [LoginFormFields.email]: email,
      [LoginFormFields.password]: password,
    }),
    [email, password]
  );

  const onInputChange = useCallback(
    (event) => {
      formFieldsManagers[event.target.name].setValue(event.target.value);
      console.log(LoginFormFields.email);
    },
    [formFieldsManagers]
  );

  const handleSubmit = (event: any) => {
    window.location.href = "/recommendations";
  };

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
            // name={LoginFormFields.email}
            // helperText="Email must have the right format and cannot be empty"
            // error={email.hasErrors}
            onChange={onInputChange}
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
          sx={{ marginLeft: "-40px", marginTop: "30px" }}
        >
          <TextFieldRegisterUserStyled
            id="passwordFormEmailField"
            required
            label="Password"
            // name={LoginFormFields.email}
            // helperText={email.errors}
            // error={email.hasErrors}
            onChange={onInputChange}
            // onBlur={email.validate}
            // value={email.value}
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
          fontFamily: "Inter",
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
          // disabled={
          //   !(email.value && password.value) ||
          //   password.hasErrors ||
          //   email.hasErrors
          // }
          // onClick={handleClick}
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </GridStyled>
    </GridGlobalStyled>
  );
};

export default LoginBox;
