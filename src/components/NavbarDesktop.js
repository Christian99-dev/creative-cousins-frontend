import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import { responsiveCSS, responsiveCSSauto } from "../services/Style/responsive";

const NavbarDesktop = ({ show }) => {
  const { data, loading } = FetchLogo();
  return (
    show && (
      <NavbarDesktopStyle>
        <div className="left">
          <div className="nav-button">Über uns</div>
          <div className="nav-button">Portfolio</div>
        </div>
        <div className="buffer" />
        {!loading && <img alt="Firmenlogo" src={data.logo} />}
        <div className="buffer" />
        <div className="right">
          <div className="nav-button">Leistungen</div>
          <div className="nav-button">Kontakt</div>
        </div>
      </NavbarDesktopStyle>
    )
  );
};

export default NavbarDesktop;

const NavbarDesktopStyle = styled.nav`
  width: 100%;
  display: flex;
  background-color: var(--grey);
  justify-content: center;
  ${responsiveCSSauto("height", 120, 100, 80, 60, 40)}

  .left {
    margin-left: var(--space-5);
  }

  .right {
    margin-right: var(--space-5);
  }

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
      white-space: nowrap;
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

  .buffer {
    width: var(--space-8);
  }
`;
