import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const NavbarStyled = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.light,
    height: "80px",
    width: "100%",
    top: 0,
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    zIndex: 2,
  };
});

export const TypeNavbarStyled = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    height: "45px",
    width: "100%",
    top: "80px",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
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
