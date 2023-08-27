import React from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import Parser from "html-react-parser";
import useMobile from "../services/Hooks/useMobile";
import { device } from "../theme/breakpoints";

const Scroller = ({ text }) => {
  const { data, loading } = FetchLogo();
  const mobile = useMobile();
  return (
    <ScrollerStyle>
      <div className="textsection">{Parser(text)}</div>
      <div className="logosection">
        {!loading && !mobile && <img src={data.logo} alt="Unternehmenslogo" />}
      </div>
    </ScrollerStyle>
  );
};

const ScrollerStyle = styled.div`
  display: flex;
  height: 100%;
  padding: var(--space-4);

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--grey);
    border-radius: 10px;
  }

  .textsection {
    width: 60%;
    height: 100%;
    overflow-x: scroll;
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

  @media ${device.tablet} {
    text-align: center;
    .textsection {
      width: 100%;
    }
    .logosection {
      display: none;
    }
  }
`;

export default Scroller;
