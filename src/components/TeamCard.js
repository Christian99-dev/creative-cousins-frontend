import React from "react";
import { styled } from "styled-components";
import { responsiveCSS, responsiveCSSauto } from "../services/Style/responsive";
import infoIcon from "../assets/icons/infobutton.png";

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

export default TeamCard;

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
