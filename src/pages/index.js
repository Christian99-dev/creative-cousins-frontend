// IndexPage.js
import React from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Welcome from "../sections/Welcome/Welcome";
import AboutUs from "../sections/AboutUs/AboutUs";
import Team from "../sections/Team/Team";
import Services from "../sections/Services/Services";

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageStyle>
        <Navbar/>
        <Welcome/>
        <AboutUs/>
        <Team/>
        <Services/>
      </IndexPageStyle>
    </Layout>
  );
};

const IndexPageStyle = styled.div``;

export default IndexPage;
