import React from "react";
import useMobile from "../../services/Hooks/useMobile";
import ServicesDesktop from "./ServiceDesktop";
import ServicesMobile from "./ServiceMobile";

const Services = () => {
  const mobile = useMobile();
  return (
    <React.Fragment>
      <ServicesDesktop show={!mobile} />
      <ServicesMobile show={mobile} />
    </React.Fragment>
  );
};

export default Services;
