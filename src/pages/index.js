// IndexPage.js
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Welcome from "../sections/Welcome/Welcome";
import AboutUs from "../sections/AboutUs/AboutUs";
import Team from "../sections/Team/Team";
import Services from "../sections/Services/Services";
import Gallery from "../sections/Gallery/Gallery";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Welcome />
      <AboutUs />
      <Team />
      <Services />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
