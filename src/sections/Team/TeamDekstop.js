import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { FetchTeam } from "../../api/fetch";
import {
  responsiveCSS,
  responsiveCSSauto,
} from "../../services/Style/responsive";
import useMobile from "../../services/Hooks/useMobile";
import infoIcon from "../../assets/icons/infobutton.png";
import { useWindowSize } from "@uidotdev/usehooks";

const TeamDesktop = ({ show }) => {
  const { data, loading } = FetchTeam();
  const [open, setOpen] = useState(true);
  const [infoId, setInfoId] = useState(0);
  const mobile = useMobile();

  return (
    show && (
      <TeamStyle id="portfolio">
        {!loading && (
          <TeamCard
            data={data.persons[0]}
            open={open}
            right={false}
            tabIndex={0}
            onClick={() => {
              setOpen(false);
              setInfoId(0);
            }}
          />
        )}
        {!loading && (
          <TeamCard
            data={data.persons[1]}
            open={open}
            right={true}
            tabIndex={0}
            onClick={() => {
              setOpen(false);
              setInfoId(1);
            }}
          />
        )}
        {!loading && !mobile && (
          <InfoBox
            open={!open}
            data={data.persons[infoId]}
            onButtonClick={() => setOpen(true)}
            buttonText={data.backButton}
          />
        )}
        <div className="bigbar" />
      </TeamStyle>
    )
  );
};

const TeamStyle = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-6);
  ${responsiveCSS("margin-top", 25, 25, 25, 0, 0, "%")}
  ${responsiveCSS("padding-top", 10, 10, 10, 0, 0, "%")}
  ${responsiveCSS("padding-bottom", 45, 45, 50, 0, 0, "%")}

  .bigbar {
    transform: rotate(-45deg);
    position: absolute;
    ${responsiveCSS("height", 600, 500, 450, 0, 0)}
    background-color: var(--orange);
    width: 200%;
    z-index: -1;
  }
`;

const TeamCard = ({ data, right, onClick, open, tabIndex }) => {
  const { name, title, img } = data;
  const { width } = useWindowSize();
  const circleRef = useRef(null);

  const calcTravelDist = (displayWidth, circleRef) => {
    if (circleRef.current == null) return 0;
    const displayCenter = displayWidth / 2;
    const circleXpos = circleRef.current.getBoundingClientRect().x;
    const circleWidth = circleRef.current.getBoundingClientRect().width;
    const circleCenter = circleWidth / 2 + circleXpos;
    const travelDist = displayCenter - circleCenter;
    return travelDist;
  };

  return (
    <TeamCardStyle
      className={(right ? "right " : "") + (open ? "open" : "close")}
      circlemovevalue={calcTravelDist(width, circleRef)}
    >
      <div
        role="button"
        tabIndex={tabIndex}
        className={"card-container"}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      >
        <div className="info-icon-container">
          <img className="info-icon" alt="Infoicon" src={infoIcon} />
        </div>
        <img className="image" alt={name + " " + title} src={img} />
        <div className="text-container">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
      </div>
      <div className="circle" ref={circleRef} />
    </TeamCardStyle>
  );
};

const TeamCardStyle = styled.div`
  position: relative;

  .card-container {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 60;
    opacity: 1;
    transition: opacity 0.4s ease-in;

    .info-icon {
      display: inline-block;
      ${responsiveCSSauto("height", 25)}
    }

    .image {
      ${responsiveCSS("height", 500, 470, 400, 0, 0)}
    }

    .text-container {
      color: var(--orange);
      font-size: var(--fs-4);
    }

    .info-icon-container,
    .text-container {
      ${responsiveCSSauto("height", 50)}
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .circle {
    z-index: 50;
    position: absolute;
    clip-path: circle(50% at 50% 50%);
    background-color: var(--white-transparen);
    top: 50%;
    left: 50%;
    transition: all 0.4s ease-out;
    ${responsiveCSS("width", 700, 650, 550, 0, 0)}
    ${responsiveCSS("height", 700, 650, 550, 0, 0)}
    ${responsiveCSS("margin-left", -(700 / 2), -(650 / 2), -(550 / 2), 0, 0)}
    ${responsiveCSS("margin-top", -(700 / 2), -(650 / 2), -(550 / 2), 0, 0)}
  }

  &.right .card-container {
    flex-direction: column-reverse;
  }

  // Closing

  &.close {
    .card-container {
      z-index: 30;
      transition: opacity 0.4s ease-out;
      opacity: 0;
      z-index: -1;
    }

    .circle {
      z-index: 20;
      transform: ${(props) => "translateX(" + props.circlemovevalue + "px)"};
      transition: all 0.4s ease-out;
    }
  }
`;

const InfoBox = ({ open, data, onButtonClick, buttonText }) => {
  const { name, title, question, answers } = data;
  return (
    <InfoBoxStyle className={open ? "open" : "closed"}>
      <div className="text-container">
        <p className="name">{name}</p>
        <p className="title">{title}</p>
        <p className="question">{question}</p>
        <div className="answers">
          {answers.map((answer, index) => (
            <p className="answer" key={index}>
              {answer}
            </p>
          ))}
        </div>
      </div>
      <button onClick={onButtonClick}>{buttonText}</button>
    </InfoBoxStyle>
  );
};

const InfoBoxStyle = styled.div`
  text-align: center;
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: red;
  opacity: 1;
  z-index: 40;
  background-color: transparent;
  clip-path: circle(50% at 50% 50%);
  ${responsiveCSS("width", 700, 650, 550, 0, 0)}
  ${responsiveCSS("height", 700, 650, 550, 0, 0)}
  transition: all 0.4s ease-out;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: var(--fs-3);
    color: var(--orange);
    font-weight: 600;
  }
  .title {
    font-size: var(--fs-3);
    color: var(--orange);
    font-weight: 600;
    margin-bottom: var(--space-3);
  }
  .question {
    font-size: var(--fs-2);
    margin-bottom: var(--space-3);
  }
  .answers {
    font-size: var(--fs-4);
    .answer {
      margin-bottom: var(--space-1);
    }
  }

  button {
    width: auto;
    padding: 4% 10%;
    border-radius: var(--border-radius);
    font-style: italic;
    font-size: var(--fs-4);
    color: var(--orange);
    cursor: pointer;
  }

  &.closed {
    transition: all 0.4s ease-out;
    opacity: 0;
  }
`;

export default TeamDesktop;
