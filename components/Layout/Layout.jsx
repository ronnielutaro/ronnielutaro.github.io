/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from "react";
import Footer from "./Footer";
import SideBarMenu from '../UI/SideBarMenu'

const Layout = (props) => {
  return (
    <div>
      <SideBarMenu />
      <div id="page-wrapper" className="page-wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
