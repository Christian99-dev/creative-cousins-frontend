import React, { useRef } from "react";
import Root from "../components/Root";
import Navbar from "../sections/Navbar/Navbar";
import Scroller from "../components/Scroller";
import Footer from "../sections/Footer/Footer";
import { FetchPolicy } from "../api/fetch";
import { styled } from "styled-components";

const PolicyPage = ({ type }) => {
  const { data, loading } = FetchPolicy();
  const headerRef = useRef();
  const footerRef = useRef();

  const calculateLeftSpace = (headerRef, footerRef) => {
    if (!headerRef.current || !footerRef.current) return 0;
    return (
      headerRef.current.getBoundingClientRect().height +
      footerRef.current.getBoundingClientRect().height
    );
  };
  return (
    <Root>
      <PolicyPageStyle leftspace={calculateLeftSpace(headerRef, footerRef)}>
        <header ref={headerRef}>
          <Navbar />
        </header>
        <main>{!loading && <Scroller text={data[type]} />}</main>
        <Footer innerRef={footerRef} />
      </PolicyPageStyle>
    </Root>
  );
};

const PolicyPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  h1 {
    padding: var(--space-3) 0;
  }

  h2 {
    padding: var(--space-2) 0;
  }

  h3 {
    padding: var(--space-1) 0;
  }

  main {
    ${(props) => "max-height: calc(100vh - " + props.leftspace + "px);"}
    flex: 1;
  }
`;

export default PolicyPage;
