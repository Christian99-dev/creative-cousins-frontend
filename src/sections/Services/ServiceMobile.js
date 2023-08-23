import React, { createRef, useEffect, useRef, useState } from "react";
import { FetchServices } from "../../api/fetch";
import { styled } from "styled-components";
import { responsiveCSS } from "../../services/Style/responsive";

const ServiceMobile = ({ show }) => {
  const { data, loading } = FetchServices();

  return (
    show && (
      <ServiceMobileStyle>
        {!loading && <Accordion items={data.services} />}
        {!loading && (
          <img
            className="background"
            alt="Die Gründer von Creative Cousins"
            src={data.backgroundMobile}
          />
        )}
      </ServiceMobileStyle>
    )
  );
};

const ServiceMobileStyle = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-8);
  ${responsiveCSS("height", 0, 0, 0, 1000, 800)}

  .background {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Accordion = ({ items }) => {
  const [active, setActive] = useState(-1);
  const [heights, setHeights] = useState([]);
  const elementsRef = useRef(items.map(() => createRef()));

  useEffect(() => {
    const nextHeights = elementsRef.current.map(
      ref => ref.current.getBoundingClientRect().height
    );
    setHeights(nextHeights);
  }, []);

  return (
    <AccordionStyle>
      {items.map((item, index) => {
        return (
          <div className="box" key={index}>
            <p
              className={"button" + (active === index ? " active" : "")}
              onClick={() => {
                if (active === index) setActive(-1);
                else setActive(index);
              }}
            >
              {item.name}
            </p>
            <p style={{height:heights[index]}} className={"text" + (active !== index ? " closed" : "")}>
              {item.description}
            </p>
            <p ref={elementsRef.current[index]} key={index} className="shadowTextBox">
              {item.description}
            </p>
          </div>
        );
      })}
    </AccordionStyle>
  );
};

const AccordionStyle = styled.div`
  text-align: center;
  border-bottom: 2px solid #a7a7a7;

  .box {
    .button {
      font-size: var(--fs-2);
      color: var(--orange);
      padding: var(--space-3) 0;
      border-top: 2px solid #a7a7a7;
    }

    .text {
      font-size: var(--fs-4);
      transition: all 0.3s ease-out;
      overflow: hidden;

      &.closed {
        transition: all 0.3s ease-in;
        height: 0 !important;
      }
    }

    .shadowTextBox{
      left: 0;
      right: 0;
      position: absolute;
      padding: 0 80px;
      z-index: -1;
      opacity: 0;
      font-size: var(--fs-4);
      padding-bottom: var(--space-3);
    }
  }
`;

export default ServiceMobile;
