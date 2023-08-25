import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import useMobile from "../../services/Hooks/useMobile";

const Navbar = () => {
  const mobile = useMobile();
  return (
    <React.Fragment>
      <NavbarDesktop show={!mobile} />
      <NavbarMobile show={mobile} />
    </React.Fragment>
  );
};

export default Navbar;
