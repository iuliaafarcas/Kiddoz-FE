import React from "react";
import { NavbarStyled, LogoStyled } from "./StyledComponents";
import logo from "../../assets/logoRH.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">
        <LogoStyled src={logo} />
      </Link>
    </NavbarStyled>
  );
};
export default Navbar;
