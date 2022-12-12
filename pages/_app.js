/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from "react";
{/* Bootstrap */}
import '../styles/bootstrap.min.css';
{/* Main */}
import '../styles/main.css';
{/* Font Awesome */}
import '../styles/font-awesome.css';
{/* Swiper */}
import '../styles/swiper.min.css';
{/* Elements */}
import '../styles/elements.css';
{/* Media queries */}
import '../styles/media-queries.css';
import '../styles/primary-color/coral.css';
import '../styles/overlay-color/blue.css';
{/* ronnie-theme css */}
import '../styles/ronnie-theme.css';
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
