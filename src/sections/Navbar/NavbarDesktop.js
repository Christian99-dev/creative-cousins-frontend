import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../../api/fetch";
import { responsiveCSS } from "../../services/Style/responsive";
import { Link } from "gatsby";
import { Link as Scroller } from "react-scroll";
import { navButtonSetting } from "../../services/Utils/navbuttonSettings";

const NavbarDesktop = ({ show, navigation }) => {
  const { data, loading } = FetchLogo();
  return (
    show && (
      <NavbarDesktopStyle>
        <div className="bar">
          {navigation && (
            <div className="left">
              <Scroller
                className="nav-button"
                activeClass="active"
                to="aboutUs"
                spy={true}
                {...navButtonSetting}
              >
                Über uns
              </Scroller>
              <Scroller
                className="nav-button"
                activeClass="active"
                to="portfolio"
                spy={true}
                {...navButtonSetting}
              >
                Portfolio
              </Scroller>
            </div>
          )}
          <div className="buffer" />
          {!loading && !navigation && (
            <Link className="logo-wrapper" to="/">
              <img className="logo" alt="Firmenlogo" src={data.logo} />
            </Link>
          )}
          {!loading && navigation && (
            <img alt="Firmenlogo" className="logo" src={data.logo} />
          )}
          <div className="buffer" />
          {navigation && (
            <div className="right">
              <Scroller
                className="nav-button"
                activeClass="active"
                {...navButtonSetting}
                to="services"
                spy={true}
              >
                Leistungen
              </Scroller>
              <Scroller
                className="nav-button"
                activeClass="active"
                {...navButtonSetting}
                to="contact"
                spy={true}
              >
                Kontakt
              </Scroller>
            </div>
          )}
        </div>

        <div className="bar-placeholder" />
      </NavbarDesktopStyle>
    )
  );
};

export default NavbarDesktop;

const NavbarDesktopStyle = styled.nav`
  .bar {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    background-color: var(--grey);
    justify-content: center;
    ${responsiveCSS("height", 100, 80, 70, 0, 0)}

    .logo {
      cursor: pointer;
    }
    .logo-wrapper {
      .logo {
        height: 100%;
      }
    }

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
        font-weight: 600;
        &:hover,
        &.active {
          color: var(--pink);
          text-decoration: underline;
          transition: color var(--transition-time) ease-in;
        }
      }
    }

    img {
      padding: var(--space-1) 0;
    }

    .buffer {
      width: var(--space-8);
    }
  }

  .bar-placeholder {
    ${responsiveCSS("height", 100, 80, 70, 60, 40)}
  }
`;
