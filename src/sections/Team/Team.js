import React from "react";
import useMobile from "../../services/Hooks/useMobile";
import TeamDesktop from "./TeamDekstop";
import TeamMobile from "./TeamMobile";

const Team = () => {
  const mobile = useMobile();
  return (
    <React.Fragment>
      <TeamDesktop show={!mobile} />
      <TeamMobile show={mobile} />
    </React.Fragment>
  );
};

export default Team;
