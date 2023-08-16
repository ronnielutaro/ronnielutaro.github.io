import AOS from "aos";
import "aos/dist/aos.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { useEffect } from "react";

import "./../styles/css/animate.css";
import "./../styles/css/bootstrap.min.css";

// CSS File Here
import "./../styles/css/elegantIcons.css";
import "./../styles/css/icofont.css";
import "./../styles/scss/style.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: "ease",
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}
