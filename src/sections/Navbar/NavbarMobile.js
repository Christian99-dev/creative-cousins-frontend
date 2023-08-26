import React, { useState } from "react";
import { styled } from "styled-components";
import { responsiveCSS } from "../../services/Style/responsive";
import { FetchLogo } from "../../api/fetch";
import menuIcon from "../../assets/icons/menu-outline.svg";
import { Link } from "gatsby";
import { Link as Scroller } from "react-scroll";
import { navButtonSettingMobile } from "../../services/Utils/navbuttonSettings";

const NavbarMobile = ({ show, navigation }) => {
  const { data, loading } = FetchLogo();
  const [open, setOpen] = useState(false);

  return (
    show && (
      <NavbarMobileStyle>
        <div className="bar">
          <div className="buffer" />
          {!loading && navigation && (
            <Scroller
              className="scroller-logo"
              to="welcome"
              {...navButtonSettingMobile}
            >
              <img className="logo" alt="Firmenlogo" src={data.logo} />
            </Scroller>
          )}

          {!loading && !navigation && (
            <Link to="/" className="logo-wrapper">
              <img className="logo" alt="Firmenlogo" src={data.logo} />
            </Link>
          )}

          {!loading && (
            <div className="icon-container">
              {navigation && (
                <img
                  className="icon"
                  alt="Menu icon"
                  role="presentation"
                  src={menuIcon}
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
          )}
        </div>
        <div className="placeholder-bar" />

        <div className={"dropdown " + open}>
          <Scroller
            className="nav-button"
            activeClass="active"
            to="aboutUs"
            spy={true}
            {...navButtonSettingMobile}
            onClick={() => setOpen(!open)}
          >
            Über uns
          </Scroller>
          <Scroller
            className="nav-button"
            activeClass="active"
            to="portfolio"
            spy={true}
            {...navButtonSettingMobile}
            onClick={() => setOpen(!open)}
          >
            Portfolio
          </Scroller>
          <Scroller
            className="nav-button"
            activeClass="active"
            to="services"
            spy={true}
            {...navButtonSettingMobile}
            onClick={() => setOpen(!open)}
          >
            Leistungen
          </Scroller>
          <Scroller
            className="nav-button"
            activeClass="active"
            to="contact"
            spy={true}
            {...navButtonSettingMobile}
            onClick={() => setOpen(!open)}
          >
            Kontakt
          </Scroller>
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

    .logo-wrapper {
      height: 100%;
    }

    .icon-container {
      display: flex;
      height: 100%;
      justify-content: right;
      align-items: center;
      .icon {
        height: 70%;
      }
    }
    .scroller-logo {
      height: 100%;
    }
    .logo {
      height: 100%;
    }

    .icon-container,
    .buffer {
      flex: 1;
    }
  }

  .placeholder-bar {
    ${responsiveCSS("height", 0, 0, 0, 60, 40)}
  }

  .dropdown {
    width: 50%;
    display: flex;
    flex-direction: column;
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
      font-size: var(--fs-3);
      transition: color var(--transition-time) ease-in;
      font-weight: 600;

      &.active {
        color: var(--pink);
        text-decoration: underline;
        transition: color var(--transition-time) ease-in;
      }
    }

    &.false {
      transition: transform var(--transition-time) ease-out;
      transform: translateY(-100%);
    }
  }
`;
