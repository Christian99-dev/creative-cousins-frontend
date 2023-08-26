import React, { useState } from "react";
import { styled } from "styled-components";
import { FetchTeam } from "../../api/fetch";
import { responsiveCSS } from "../../services/Style/responsive";
import infoIcon from "../../assets/icons/infobutton.png";
import Slider from "../../components/Slider";

const TeamMobile = ({ show }) => {
  const { data, loading } = FetchTeam();
  return (
    show && (
      <TeamMobileStyle id="portfolio">
        {!loading && (
          <Slider
            items={[
              <TeamCard data={data.persons[0]} buttonText={data.backButton} tabIndex={0} />,
              <TeamCard data={data.persons[1]} buttonText={data.backButton} tabIndex={-1} />,
            ]}
          />
        )}
        <div className="bigbar" />
      </TeamMobileStyle>
    )
  );
};

const TeamMobileStyle = styled.section`
  position: relative;
  display: flex;
  ${responsiveCSS("margin-top", 35, 35, 35, 35, 20, "%")}
  ${responsiveCSS("margin-bottom", 55, 55, 60, 35, 25, "%")}
  align-items: center;
  .bigbar {
    left: -50%;
    transform: rotate(-45deg);
    position: absolute;
    ${responsiveCSS("height", 0, 0, 0, 200, 150)}
    background-color: var(--orange);
    width: 200%;
  }
`;

const TeamCard = ({ data, buttonText, tabIndex }) => {
  const { name, title, question, answers, img } = data;
  const [open, setOpen] = useState(false);

  return (
    <TeamCardStyle>
      <div
        tabIndex={tabIndex}
        className={"button " + (open ? "open" : "closed")}
        role="button"
        onClick={() => {
          if (!open) setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (!open) setOpen(true);
          }
        }}
      >
        {!open ? (
          <React.Fragment>
            <div className="buffer" />
            <div className="text-container">
              <p className="name">{name}</p>
              <p className="title">{title}</p>
            </div>
            <div className="info-icon-container">
              <img src={infoIcon} alt="Infoicon" className="info-icon" />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
            <button onClick={() => setOpen(false)}>{buttonText}</button>
          </React.Fragment>
        )}
      </div>
      <img className="image" alt={name + " " + title} src={img} />
    </TeamCardStyle>
  );
};

const TeamCardStyle = styled.div`
  ${responsiveCSS("height", 0, 0, 0, 500, 400)}
  width: 80%;
  position: relative;
  margin: auto;

  .image {
    z-index: 50;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .button {
    position: relative;
    z-index: 60;
    display: flex;
    background-color: var(--white-transparen-hard);
    border-radius: 50px;
    padding: var(--space-3);
    top: var(--space-2);
    color: var(--orange);
    font-weight: 600;
    align-items: center;
    transition: all 0.2s ease-in;
    height: 64px;
    vertical-align: top;

    .text-container {
      text-align: center;
      .name {
        text-decoration: underline;
      }
    }

    .info-icon {
      ${responsiveCSS("height", 0, 0, 0, 30, 25)}
    }

    .buffer,
    .info-icon-container {
      flex: 1;
    }

    .info-icon-container {
      display: flex;
      justify-content: right;
    }

    &.open {
      transition: all 0.2s ease-out;
      flex-direction: column;
      top: 0;
      border-radius: var(--border-radius);
      height: 100%;
      justify-content: space-between;

      .name {
        font-size: var(--fs-4);
      }
      .title {
        padding-bottom: var(--space-7);
        font-size: var(--fs-4);
      }

      .question {
        font-size: var(--fs-4);
        padding-bottom: var(--space-7);
        color: black;
      }

      .answer {
        font-size: var(--fs-4);
        color: black;
        padding-bottom: var(--space-1);
      }

      button {
        width: auto;
        padding: 4% 10%;
        border-radius: var(--border-radius);
        font-style: italic;
        font-size: var(--fs-4);
        color: var(--orange);
        cursor: pointer;
        outline: 3px var(--orange-transparen) solid;
      }
    }
  }
`;

export default TeamMobile;
