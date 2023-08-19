import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import {
  responsiveCSS,
  responsiveCSSauto,
} from "../services/Style/responsive";

const Navbar = () => {
  const { data, loading } = FetchLogo();
  return (
    <NavbarStyle>
      <div className="left">
        <div>Über uns</div>
        <div>Portfolio</div>
      </div>
      {!loading && <img alt="Firmenlogo" src={data.logo} />}
      <div className="right">
        <div>Leistungen</div>
        <div>Kontakt</div>
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
  color: var(--orange);
  ${responsiveCSSauto("height", 120, 100, 80, 60, 40)}
  gap: var(--space-8);

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    font-size: var(--fs-4);
  }

  img {
    ${responsiveCSS("height", 120, 100, 80, 60, 40)}
  }
`;
