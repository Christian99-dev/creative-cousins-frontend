import React from "react";
import PolicyPage from "../views/PolicyPage";
import { Seo } from "../components/Seo";
import { sites } from "../../static/constants/metadata";

const impressum = () => {
  return <PolicyPage type="impressum">impressum</PolicyPage>;
};

export default impressum;

export const Head = () => (
  <Seo
    title={sites.impressum.title}
    description={sites.impressum.description}
  />
);
