import React from "react";
import { styled } from "styled-components";
import { FetchServices } from "../api/fetch";
import Switcher from "../components/Switcher";

const ServiceDesktop = ({ show }) => {
  const { data, loading } = FetchServices();
  return (
    show && (
      <ServiceDesktopStyle>
        {!loading && <Switcher items={data.services}></Switcher>}
      </ServiceDesktopStyle>
    )
  );
};

export default ServiceDesktop;

const ServiceDesktopStyle = styled.section``;
