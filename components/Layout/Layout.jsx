import React, { Fragment } from "react";

/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

const Layout = (props) => {
  return (
    <Fragment>
      {/* <Header /> */}
      <div>{props.children}</div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
