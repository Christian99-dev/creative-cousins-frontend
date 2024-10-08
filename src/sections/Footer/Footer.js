import React from "react";
import { styled } from "styled-components";
import { FetchFooter, FetchLogo } from "../../api/fetch";
import { responsiveCSS } from "../../services/Style/responsive";
import { device } from "../../theme/breakpoints";
import { Link } from "gatsby";

const Footer = ({ innerRef }) => {
  const { data: dataFooter, loading: loadingFooter } = FetchFooter();
  const { data: dataLogo, loading: loadingLogo } = FetchLogo();

  return (
    <FooterStyle ref={innerRef}>
      <Link className="link" to="/impressum">
        Impressum
      </Link>
      <Link className="link" to="/datenschutz">
        Datenschutz
      </Link>
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
  ${responsiveCSS("height", "250px", "180px", "170px", "auto", "auto", "")}

  ${responsiveCSS(
    "padding",
    "40px 200px",
    "30px 180px",
    "25px 130px",
    "25px 130px",
    "25px 130px",
    ""
  )}

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-orange);

  img {
    ${responsiveCSS("height", "100%", "100%", "100%", "100px", "80px", "")}
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    font-size: var(--fs-4);
    color: black;
    transition: all 0.2s ease-in;
    
    &:hover{
      color: var(--pink);
      transition: all 0.2s ease-in;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    ${responsiveCSS("gap", 0, 0, 0, 20, 15)}
  }
`;
