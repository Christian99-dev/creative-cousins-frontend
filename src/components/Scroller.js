import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import Parser from "html-react-parser";

const Scroller = ({ text }) => {
  const { data, loading } = FetchLogo();
  return (
    <ScrollerStyle>
      <div className="textsection">{Parser(text)}</div>
      <div className="logosection">
        {!loading && <img src={data.logo} alt="Unternehmenslogo" />}
      </div>
    </ScrollerStyle>
  );
};

const ScrollerStyle = styled.div`
  display: flex;
  height: 100%;
  padding: var(--space-4);

  .textsection {
    width: 60%;
    height: 100%;
    overflow: scroll;
  }

  .logosection {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    img {
      width: 100%;
    }
  }
`;

export default Scroller;
