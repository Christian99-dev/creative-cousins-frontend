import React from "react";
import PolicyPage from "../views/PolicyPage";
import { Seo } from "../components/Seo";
import { sites } from "../../static/constants/metadata";

const datenschutz = () => {
  return <PolicyPage type="datenschutz" />;
};

export default datenschutz;

export const Head = () => (
  <Seo
    title={sites.dateschutz.title}
    description={sites.dateschutz.description}
  />
);
