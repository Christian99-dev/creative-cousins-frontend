import React from "react";
import { styled } from "styled-components";
import { FetchLogo, FetchWelcome } from "../../api/fetch";
import { responsiveCSS } from "../../services/Style/responsive";
import useMobile from "../../services/Hooks/useMobile";
import instagram from "../../assets/icons/instagram.png";
import email from "../../assets/icons/email.png";
import whatsapp from "../../assets/icons/whatsapp.png";

const Welcome = () => {
  const { data: dataWelcome, loading: loadingWelome } = FetchWelcome();
  const { data: dataLogo, loading: loadingLogo } = FetchLogo();
  const mobile = useMobile();

  return (
    <WelcomeStyle>
      {!loadingWelome && !mobile && (
        <img
          className="background"
          src={dataWelcome.backgroundDesktop}
          alt="Bild der beiden Gründer von Creative Cousins"
        />
      )}

      {!loadingWelome && mobile && (
        <img
          className="background"
          src={dataWelcome.backgroundMobile}
          alt="Bild der beiden Gründer von Creative Cousins"
        />
      )}

      <div>
        <div className="cricle">
          {!loadingLogo && (
            <img className="logo" alt="Firmenlogo" src={dataLogo.logo}></img>
          )}
        </div>
      </div>

      <div className="bottom-bar">
        {!loadingWelome && (
          <div className="icons">
            <a href={dataWelcome.instagramLink}>
              <img src={instagram} alt="Instagram Logo" />
            </a>
            <a href={dataWelcome.whatsappLink}>
              <img src={whatsapp} alt="Whatsapp Logo" />
            </a>
            <a href={"mailto:" + dataWelcome.instagramLink}>
              <img src={email} alt="Email Logo" />
            </a>
          </div>
        )}
      </div>
    </WelcomeStyle>
  );
};

export default Welcome;

const WelcomeStyle = styled.section`
  ${responsiveCSS(
    "height",
    "calc(100vh - 120px)",
    "calc(100vh - 100px)",
    "calc(100vh - 80px)",
    "calc(100vh - 60px)",
    "calc(100vh - 40px)",
    ""
  )}
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .background {
    z-index: -1;
    position: absolute;
    width: 100%;
    ${responsiveCSS(
      "height",
      "calc(100vh - 100px)",
      "calc(100vh - 80px)",
      "calc(100vh - 70px)",
      "calc(100vh - 60px)",
      "calc(100vh - 40px)",
      ""
    )}
    object-fit: cover;
    object-position: center 20%;
    left: 0;
  }

  .cricle {
    position: static;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--space-1);
    background-color: var(--grey-transparent);
    clip-path: circle(45% at 50% 50%);
    ${responsiveCSS("height", 600, 500, 400, 350, 250)}
    padding: var(--space-4);
    .logo {
      height: 70%;
    }
  }

  .bottom-bar {
    padding: var(--space-1);
    display: flex;
    justify-content: right;
    .icons {
      gap: var(--space-1);
      display: flex;
      flex-direction: column;
      img {
        cursor: pointer;
        ${responsiveCSS("width", 75, 70, 60, 50, 40)}
      }
    }
  }
`;
