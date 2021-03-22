import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./Navbar";
import { GlobalStyle } from "../../GlobalStyles";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/a">Rans Pizzaa</NavLink>
        <NavIcon onClick={toggle}>
          <GlobalStyle />
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
