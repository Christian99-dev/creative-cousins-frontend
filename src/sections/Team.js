import React, { useState } from "react";
import { styled } from "styled-components";
import { FetchTeam } from "../api/fetch";
import TeamCard from "../components/TeamCard";
import { responsiveCSS } from "../services/Style/responsive";

const Team = () => {
  const { data, loading } = FetchTeam();
  const [open, setOpen] = useState(true);
  const [infoId, setInfoId] = useState(0);

  return (
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
      {!loading && (
        <InfoBox
          open={!open}
          data={data.persons[infoId]}
          onButtonClick={() => setOpen(true)}
          buttonText={data.backButton}
        />
      )}
      <div className="bigbar" />
    </TeamStyle>
  );
};

const TeamStyle = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-6);
  ${responsiveCSS("height", 200, 150, 125, 100, 100, "vh")}

  .bigbar {
    transform: rotate(-45deg);
    position: absolute;
    ${responsiveCSS("height", 600, 500, 450, 0, 0)}
    background-color: var(--orange);
    width: 200%;
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

export default Team;
