import React from "react";
import { styled } from "styled-components";
import { FetchFooter, FetchLogo } from "../../api/fetch";
import {
  responsiveCSS,
} from "../../services/Style/responsive";
import { device } from "../../theme/breakpoints";

const Footer = () => {
  const { data: dataFooter, loading: loadingFooter } = FetchFooter();
  const { data: dataLogo, loading: loadingLogo } = FetchLogo();

  return (
    <FooterStyle>
      <a className="link">Impressum</a>
      <a className="link">Datenschutz</a>
      {!loadingFooter && (
        <a className="link" href={dataFooter.instagramLink}>
          Instagram
        </a>
      )}

      {!loadingLogo && <img src={dataLogo.logo} alt="Logo des Unternehmens" />}
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  ${responsiveCSS(
    "padding",
    "100px 200px",
    "75px 150px",
    "50px 50px",
    "35px 35px",
    "30px 30px",
    ""
  )}
  /* padding: var(--space-4) var(--space-8); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-orange);

  img {
    ${responsiveCSS("height", 250, 235, 150, 125, 100)}
  }

  .link {
    text-decoration: none;
    font-size: var(--fs-3);
    color: black;
  }

  @media ${device.tablet} {
    flex-direction: column;
    ${responsiveCSS("gap", 0, 0, 0, 20, 15)}
  }
`;
