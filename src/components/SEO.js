import React from "react";
import { useSiteMetadata } from "../services/Hooks/useSiteMetadata";
import { FetchLogo, endpoints } from "../api/fetch";

export const SEO = ({ title: pageTitle, description, pathname, children }) => {
  const {
    title: websiteTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();
  const faviconEndpoint = endpoints.favicon;

  const seo = {
    title: pageTitle + " | " + websiteTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href={faviconEndpoint} />
    </>
  );
};
