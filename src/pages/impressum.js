import React from "react";
import PolicyPage from "../views/PolicyPage";
import { SEO } from "../components/SEO";

const impressum = () => {
  return <PolicyPage type="impressum">impressum</PolicyPage>;
};

export default impressum;

export const Head = () => <SEO title="Impressum" />
