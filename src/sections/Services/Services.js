import React from "react";
import useMobile from "../../services/Hooks/useMobile";
import ServicesDesktop from "./ServiceDesktop";

const Services = () => {
  const mobile = useMobile();
  return (
    <React.Fragment>
      <ServicesDesktop show={!mobile} />
    </React.Fragment>
  );
};

export default Services;
