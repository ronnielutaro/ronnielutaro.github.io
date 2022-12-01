import React, { useEffect, useState } from "react";
import '../styles/plugins.css';
import '../styles/style.css';
import '../styles/templete.css';
import '../styles/skin/skin-1.css';
import '../plugins/slick/slick.min.css';
import '../plugins/slick/slick-theme.min.css';
import 'react-modal-video/css/modal-video.min.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
    {/* const [body_, setbody_] = useState();
    const [header, setHeader] = useState("fixed");
    const [header_, setHeader_] = useState();
    let scrollPosition = useScrollPosition();

    useEffect(() => {
      setbody_(document.querySelector("body"));
      setHeader_(document.getElementsByClassName("main-bar-wraper"));
      }, []);


    var element = document.getElementById("fix-header"); 	
      
    if(typeof(element) != 'undefined' && element != null){
      header === "fixed" && scrollPosition > 10
        ? header_ && header_[0].classList.add("is-fixed")
        : header_ && header_[0].classList.remove("is-fixed"); 	
    }
  */}
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
