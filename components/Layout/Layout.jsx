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
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Header />
      <CustomCursor />
      <PreLoader />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
