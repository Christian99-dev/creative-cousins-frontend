import React from "react";
import Root from "../components/Root";
import Navbar from "../sections/Navbar/Navbar";
import Scroller from "../components/Scroller";
import Footer from "../sections/Footer/Footer";
import { FetchPolicy } from "../api/fetch";
import { styled } from "styled-components";

const PolicyPage = ({type}) => {
  const { data, loading } = FetchPolicy();
  return (
    <Root>
      <PolicyPageStyle>
        <header>
          <Navbar />
        </header>
        <main>{!loading && <Scroller text={data[type]} />}</main>
        <Footer />
      </PolicyPageStyle>
    </Root>
  );
};

const PolicyPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    max-height: 500px;
    flex: 1;
  }
`;

export default PolicyPage;
