import React, { useState } from "react";
import { styled } from "styled-components";
import { FetchTeam } from "../api/fetch";
import { responsiveCSS, responsiveCSSauto } from "../services/Style/responsive";
import useMobile from "../services/Hooks/useMobile";
import infoIcon from "../assets/icons/infobutton.png";

const TeamDesktop = ({ show }) => {
  const { data, loading } = FetchTeam();
  const [open, setOpen] = useState(true);
  const [infoId, setInfoId] = useState(0);
  const mobile = useMobile();

  return (
    show && (
      <TeamStyle>
        {!loading && (
          <TeamCard
            data={data.persons[0]}
            open={open}
            right={false}
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
  ${responsiveCSS("margin-top", 35, 35, 35, 0, 0, "%")}
  ${responsiveCSS("margin-bottom", 55, 55, 60, 0, 0, "%")}

  .bigbar {
    transform: rotate(-45deg);
    position: absolute;
    ${responsiveCSS("height", 600, 500, 450, 0, 0)}
    background-color: var(--orange);
    width: 200%;
  }
`;

const TeamCard = ({ data, right, onClick, open }) => {
  const { name, title, img } = data;

  return (
    <TeamCardStyle
      className={(right ? "right " : "") + (open ? "open" : "close")}
    >
      <div className={"card-container"} onClick={onClick}>
        <div className="info-icon-container">
          <img className="info-icon" alt="Infoicon" src={infoIcon} />
        </div>
        <img className="image" alt={name + " " + title} src={img} />
        <div className="text-container">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
      </div>
      <div className="circle" />
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
    transition: opacity var(--transition-time) ease-in;

    .info-icon {
      display: inline-block;
      ${responsiveCSSauto("height", 25)}
    }

    .image {
      ${responsiveCSS("height", 500, 470, 400, 0, 0)}
    }

    .text-container {
      color: var(--orange);
      font-weight: 600;
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
      transition: opacity var(--transition-time) ease-out;
      opacity: 0;
      z-index: -1;
    }

    .circle {
      transform: translateX(200%);
      transition: all 0.4s ease-out;
    }
  }

  &.close.right {
    .circle {
      transform: translateX(-200%);
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
          {answers.map((answer) => (
            <p className="answer">{answer}</p>
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
  background-color: var(--white-transparen-hard);
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
