import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import { responsiveCSS, responsiveCSSauto } from "../services/Style/responsive";

const Navbar = () => {
  const { data, loading } = FetchLogo();
  return (
    <NavbarStyle>
      <div className="left">
        <div className="nav-button">Über uns</div>
        <div className="nav-button">Portfolio</div>
      </div>
      {!loading && <img alt="Firmenlogo" src={data.logo} />}
      <div className="right">
        <div className="nav-button">Leistungen</div>
        <div className="nav-button">Kontakt</div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  width: 100%;
  display: flex;
  background-color: var(--grey);
  justify-content: center;
  ${responsiveCSSauto("height", 120, 100, 80, 60, 40)}
  gap: var(--space-8);
  
  .left,
  .right {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    font-size: var(--fs-4);
    
    .nav-button {
      transition: color var(--transition-time) ease-out;
      color: var(--orange);
      cursor: pointer;
      &:hover {
        color: var(--pink);
        text-decoration: underline;
        transition: color var(--transition-time) ease-in;
      }
    }
  }

  img {
    ${responsiveCSS("height", 120, 100, 80, 60, 40)}
  }
`;
