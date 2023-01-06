import React from "react";
import { NavbarStyled, LogoStyled } from "./StyledComponents";
import logo from "../assets/logo.jpeg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/recommendations">
        <LogoStyled src={logo} />
      </Link>
      <Searchbar />
    </NavbarStyled>
  );
};
export default Navbar;
