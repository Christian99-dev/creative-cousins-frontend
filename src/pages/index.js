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
import { SEO } from "../components/SEO";
import { sites } from "../../static/constants/metadata";

const IndexPage = () => {
  return (
    <Root>
      <header>
        <Navbar navigation />
      </header>
      <main>
        <Welcome />
        <AboutUs />
        <Team />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </Root>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title={sites.homepage.title}
    description={sites.homepage.description}
  />
);
