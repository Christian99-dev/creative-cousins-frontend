import React, { useState } from "react";
import { styled } from "styled-components";
import { FetchLogo } from "../api/fetch";
import { responsiveCSS } from "../services/Style/responsive";

const Switcher = ({ items }) => {
  const [active, setActive] = useState(-1);
  const { data, loading } = FetchLogo();

  return (
    <SwitcherStyle>
      <div className="left">
        {items.map((item, index) => {
          return (
            <button
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="right">
        {active !== -1
          ? items.map((item, index) => {
              return (
                <div
                  className={
                    "text-container" + (active === index ? " active" : "")
                  }
                >
                  <p className="name">{item.name}</p>
                  <p className="description">{item.description}</p>
                  <img
                    src={data.logo}
                    alt="Firmenlogo"
                    className="logo background"
                  />
                </div>
              );
            })
          : !loading && (
              <div className="logo-container">
                <img src={data.logo} alt="Firmenlogo" className="logo" />
              </div>
            )}
      </div>
    </SwitcherStyle>
  );
};

export default Switcher;

const SwitcherStyle = styled.div`
  height: 550px;
  display: flex;
  padding: var(--space-5);
  margin-bottom: 100px;

  .left {
    width: 33%;
    display: flex;
    flex-direction: column;
    button {
      width: 100%;
      height: 100%;
      background-color: white;
      font-size: var(--fs-4);
      font-weight: 100;
      color: var(--orange);
      cursor: pointer;
      font-style: italic;

      &:hover,
      &.active {
        background-color: var(--grey);
      }
    }
  }

  .right {
    width: 66%;
    height: 100%;

    .logo-container,
    .text-container {
      position: relative;
      height: 100%;

      .logo {
        width: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        &.background {
          opacity: 0.1;
        }
      }
    }
    .text-container {
      display: none;
      flex-direction: column;
      text-align: center;
      padding: var(--space-5) var(--space-6);
      justify-content: center;


      .name {
        font-size: var(--fs-3);
        color: var(--orange);
        padding-bottom: var(--space-1);
      }

      .description {
        font-size: var(--fs-4);
      }

      &.active {
        display: flex;
      }
    }
  }
`;
