import React from "react";
import CustomCursor from "../UI/CustomCursor";
import PreLoader from "../UI/preloader";
import Header from "./Header";

/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

const Layout = (props) => {
  return (
    <>
      <Header />
      <CustomCursor />
      <PreLoader />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
