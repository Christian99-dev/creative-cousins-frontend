import React from "react";
import { useSiteMetadata } from "../services/Hooks/useSiteMetadata";
import { favicon } from "../../static/constants/metadata";

export const Seo = ({ title: pageTitle, description, pathname, children }) => {
  const {
    title: websiteTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: pageTitle + " | " + websiteTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href={favicon} />
      {children}
    </>
  );
};
