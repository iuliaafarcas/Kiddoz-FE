import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const NavbarStyled = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.light,
    height: "80px",
    width: "100%",
    position: "fixed",
    top: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  };
});

export const TypeNavbarStyled = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    height: "45px",
    width: "100%",
    position: "fixed",
    overflow: "hidden",
    marginTop: "70px",
    // display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  };
});

export const LogoStyled = styled("img")(() => {
  return {
    height: "60px",
    width: "190px",
    marginLeft: "120px",
    marginRight: "10px",
    marginTop: "7px",
  };
});
