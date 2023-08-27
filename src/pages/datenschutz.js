import React from "react";
import PolicyPage from "../views/PolicyPage";
import { SEO } from "../components/SEO";

const datenschutz = () => {
  return <PolicyPage type="datenschutz" />;
};

export default datenschutz;

export const Head = () => <SEO title="Datenschutz" />