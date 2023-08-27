import React from "react";
import PolicyPage from "../views/PolicyPage";
import { SEO } from "../components/SEO";
import { sites } from "../../static/constants/metadata";

const datenschutz = () => {
  return <PolicyPage type="datenschutz" />;
};

export default datenschutz;

export const Head = () => (
  <SEO
    title={sites.dateschutz.title}
    description={sites.dateschutz.description}
  />
);
