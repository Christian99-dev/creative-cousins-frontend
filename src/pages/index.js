// IndexPage.js
import React from "react";
import Root from "../components/Root";
import Navbar from "../sections/Navbar/Navbar";
import Welcome from "../sections/Welcome/Welcome";
import AboutUs from "../sections/AboutUs/AboutUs";
import Team from "../sections/Team/Team";
import Services from "../sections/Services/Services";
import Gallery from "../sections/Gallery/Gallery";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";

const IndexPage = () => {
  return (
    <Root>
      <Navbar />
      <Welcome />
      <AboutUs />
      <Team />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </Root>
  );
};

export default IndexPage;
