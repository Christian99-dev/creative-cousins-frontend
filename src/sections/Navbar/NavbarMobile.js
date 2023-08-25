import React, { useState } from "react";
import { styled } from "styled-components";
import { responsiveCSS } from "../../services/Style/responsive";
import { FetchLogo } from "../../api/fetch";
import menuIcon from "../../assets/icons/menu-outline.svg";

const NavbarMobile = ({ show }) => {
  const { data, loading } = FetchLogo();
  const [open, setOpen] = useState(false);

  return (
    show && (
      <NavbarMobileStyle>
        <div className="bar">
          <div className="buffer" />
          {!loading && (
            <img className="logo" alt="Firmenlogo" src={data.logo} />
          )}
          {!loading && (
            <div className="icon-container">
              <img className="icon" alt="Menu icon" src={menuIcon} onClick={() => setOpen(!open)} />
            </div>
          )}
        </div>
        <div className="placeholder-bar"/>

        <div className={"dropdown " + open}>
          <div className="nav-button">Über uns</div>
          <div className="nav-button">Portfolio</div>
          <div className="nav-button">Leistungen</div>
          <div className="nav-button">Kontakt</div>
          <div className="nav-button">Impressum</div>
        </div>
      </NavbarMobileStyle>
    )
  );
};

export default NavbarMobile;

const NavbarMobileStyle = styled.nav`
  .bar {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    ${responsiveCSS("height", 0, 0, 0, 60, 40)}
    display: flex;
    background-color: var(--grey);
    justify-content: space-between;
    align-items: center;
    padding: var(--space-2);

    .icon-container {
      display: flex;
      height: 100%;
      justify-content: right;
      align-items: center;
      .icon {
        height: 70%;
      }
    }

    .logo {
      height: 100%;
    }

    .icon-container,
    .buffer {
      flex: 1;
    }
  }

  .placeholder-bar{
    ${responsiveCSS("height", 0, 0, 0, 60, 40)}
  }

  .dropdown {
    z-index: 90;
    position: fixed;
    background-color: var(--grey);
    right: 0;
    ${responsiveCSS("top", 0, 0, 0, 60, 40)}
    text-align: center;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: transform var(--transition-time) ease-in;
    
    .nav-button {
      color: var(--orange);
      margin: var(--space-3);
      padding: var(--space-1);
      border-bottom: white 1px solid;
    }

    &.false{
      transition: transform var(--transition-time) ease-out;
      transform: translateY(-100%);
    }
  }
`;
