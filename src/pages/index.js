// IndexPage.js
import React from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageStyle>
        <Navbar/>
      </IndexPageStyle>
    </Layout>
  );
};

const IndexPageStyle = styled.div``;

export default IndexPage;
