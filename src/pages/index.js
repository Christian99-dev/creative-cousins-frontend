// IndexPage.js
import React from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Welcome from "../sections/Welcome";
import AboutUs from "../sections/AboutUs";

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageStyle>
        <Navbar/>
        <Welcome/>
        <AboutUs/>
      </IndexPageStyle>
    </Layout>
  );
};

const IndexPageStyle = styled.div``;

export default IndexPage;
