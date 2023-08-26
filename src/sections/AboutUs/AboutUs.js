import React from "react";
import { styled } from "styled-components";
import { FetchAboutUs, FetchLogo } from "../../api/fetch";
import { responsiveCSS } from "../../services/Style/responsive";

const AboutUs = () => {
  const { data: dataAboutUs, loading: loadingAboutUs } = FetchAboutUs();
  const { data: dataLogo, loading: loadingLogo } = FetchLogo();
  return (
    <AboutUsStyle id="aboutUs">
      {!loadingLogo && (
        <div className="img-wrapper">
          <img alt="Firmenlogo" src={dataLogo.logo} />
        </div>
      )}
      {!loadingAboutUs && <p>{dataAboutUs.text}</p>}
    </AboutUsStyle>
  );
};

export default AboutUs;

const AboutUsStyle = styled.section`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--space-5) 0;
  gap: var(--space-6);

  .img-wrapper {
    ${responsiveCSS("height", 500, 450, 350, 250, 150)}
    img {
      height: 100%;
    }
  }

  p {
    line-height: 1;
    ${responsiveCSS("padding", "0 400", "0 350", "0 200", "0 75", "0 50")}
    font-size: var(--fs-4);
  }
`;
