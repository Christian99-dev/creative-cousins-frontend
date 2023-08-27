import React from "react";
import PolicyPage from "../views/PolicyPage";
import { SEO } from "../components/SEO";
import { sites } from "../../static/constants/metadata";

const impressum = () => {
  return <PolicyPage type="impressum">impressum</PolicyPage>;
};

export default impressum;

export const Head = () => (
  <SEO
    title={sites.impressum.title}
    description={sites.impressum.description}
  />
);
