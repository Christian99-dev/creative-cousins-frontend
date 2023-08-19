import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useWindowSize } from "@uidotdev/usehooks";
import { size } from "../theme/breakpoints";

const Navbar = () => {
  const { width } = useWindowSize();
  return (
    <React.Fragment>
      <NavbarDesktop show={width > size.tablet} />
      <NavbarMobile show={width <= size.tablet} />
    </React.Fragment>
  );
};

export default Navbar;
