import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import useMobile from "../../services/Hooks/useMobile";

const Navbar = ({navigation}) => {
  const mobile = useMobile();
  return (
    <React.Fragment>
      <NavbarDesktop show={!mobile} navigation={navigation}/>
      <NavbarMobile show={mobile} navigation={navigation}/>
    </React.Fragment>
  );
};

export default Navbar;
