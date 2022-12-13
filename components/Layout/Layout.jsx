/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from "react";
import CustomCursor from "../UI/CustomCursor";
import Footer from "./Footer";
import SideBarMenu from '../UI/SideBarMenu'

const Layout = (props) => {
  return (
    <>
      <CustomCursor />
      <SideBarMenu />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
