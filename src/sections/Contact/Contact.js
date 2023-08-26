import React from "react";
import { styled } from "styled-components";
import { FetchContact } from "../../api/fetch";
import Parser from "html-react-parser";
import { responsiveCSS } from "../../services/Style/responsive";
import telIcon from "../../assets/icons/phone.svg";
import createLink from "../../services/Utils/createLink";

const Contact = () => {
  const { data, loading } = FetchContact();
  return (
    !loading && (
      <ContactStyle>
        <h1 className="title">{data.title}</h1>
        <h2 className="subtitle">{Parser(data.subtitle)}</h2>

        <div className="buttons">
          {data.buttons.map((button, index) => {
            return (
              <div className="button-section" key={index}>
                <p className="button-section-title">{button.title}</p>
                <Button text={button.text} icon={button.icon} />
              </div>
            );
          })}
        </div>
      </ContactStyle>
    )
  );
};

const ContactStyle = styled.section`
  text-align: center;
  padding: var(--space-8) var(--space-6);

  .title {
    font-size: var(--fs-1);
    font-weight: 500;
    color: var(--pink);
    text-decoration: underline;
    padding-bottom: var(--space-3);
  }

  .subtitle {
    font-size: var(--fs-3);
    font-weight: 500;
    padding-bottom: var(--space-5);
  }

  .buttons {
    display: flex;
    gap: var(--space-3);
    flex-direction: column;

    .button-section {
      align-items: center;
      display: flex;
      gap: var(--space-2);
      flex-direction: column;
    }
  }
`;

const Button = ({ icon, text }) => {
  const icons = new Map([["phone", telIcon]]);
  const iconUrl = icon !== "" ? icons.get(icon) : "";
  return (
    <a style={{ textDecoration: "none" }} href={createLink(text)}>
      <ButtonStyle>
        {iconUrl !== "" && (
          <object aria-label="icon" data={iconUrl} type="image/svg+xml" />
        )}
        {text}
      </ButtonStyle>
    </a>
  );
};

const ButtonStyle = styled.button`
  align-items: center;
  display: flex;
  background-color: var(--pink);
  border-radius: 100px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  ${responsiveCSS(
    "padding",
    "0 40px",
    "0 30px",
    "0 25px",
    "0 20px",
    "0 14px",
    ""
  )}
  ${responsiveCSS("height", 60, 55, 50, 45, 40)}

  object {
    height: 50%;
    filter: var(--white-filter);
    ${responsiveCSS("padding-right", 12, 10, 8, 7, 6)}
    &.off {
      padding: 0;
      display: none;
    }
  }

  &:hover {
    object {
      filter: var(--pink-filter);
    }

    transition: background-color 0.2s ease-in;
    background-color: white;
    border: 1px solid var(--pink);
    color: var(--pink);
  }
`;

export default Contact;
