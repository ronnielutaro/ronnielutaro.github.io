/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from "react";
import CustomCursor from "../UI/CustomCursor";
import PreLoader from "../UI/PreLoader";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <CustomCursor />
      <PreLoader />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
