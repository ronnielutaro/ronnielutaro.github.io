/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from "react";
import CustomCursor from "../UI/CustomCursor";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = (props) => {
  return (
    <div class="frame">
      <CustomCursor />
      <SideBar />
        {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
