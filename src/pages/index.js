// IndexPage.js
import React from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Welcome from "../sections/Welcome";

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageStyle>
        <Navbar/>
        <Welcome/>
      </IndexPageStyle>
    </Layout>
  );
};

const IndexPageStyle = styled.div``;

export default IndexPage;
