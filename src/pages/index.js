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
    title="Homepage"
    description="Willkommen bei CreativeCousins! Wir sind Ihre Experten für  Social Media, umfassendes Branding, professionelle Social Media Betreuung (zb Instagram), Influencer Marketing und kreative Content-Erstellung. Entdecken Sie, wie wir Ihre Vision zum Leben erwecken können."
  />
);
