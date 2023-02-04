/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import throttle from 'lodash/throttle';
import { Global } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';
import { CgArrowAlignH } from 'react-icons/cg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import globalStyles from '../global/globalStyles';
import { devName } from '../global/defaultValues';
import LoadingScreen from '../components/LoadingScreen';
import { cursorLink, fixedNav } from '../helpers';

function MyApp({ Component, pageProps }: AppProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(router.asPath);

  useEffect(() => {
    Aos.init({
      offset: 60,
      duration: 1000,
    });

    const refreshAOS = () => {
      Aos.refresh();

      setTimeout(() => {
        Aos.refresh();
      }, 1000);
    };

    window.addEventListener(
      'scroll',
      throttle(fixedNav, 100, { leading: true, trailing: true })
    );
    window.addEventListener('resize', refreshAOS);
    return () => {
      window.removeEventListener(
        'scroll',
        throttle(fixedNav, 100, { leading: true, trailing: true })
      );
      window.removeEventListener('resize', refreshAOS);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const startLoading = (url: string) => {
      if (url !== router.asPath) {
        const html = document.querySelector('html') as HTMLElement;
        html.style.overflow = 'auto';
        setShowLoading(true);
      }
    };

    const stopLoading = () => {
      setTimeout(() => {
        const html = document.querySelector('html') as HTMLElement;
        html.style.overflow = 'auto';
        setShowLoading(false);
      }, 100);
    };

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  useEffect(() => {
    const updateUrl = (url: string) => {
      setCurrentUrl(url);
    };

    router.events.on('routeChangeComplete', updateUrl);

    return () => {
      router.events.off('routeChangeComplete', updateUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = 'none';
    }
  };

  const mouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = '';
    }
  };

  const mouseMove = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${e.clientY}px`;
      cursorRef.current.style.left = `${e.clientX}px`;
    }
  };

  const mouseDown = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '.7';
    }
  };

  const mouseUp = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '';
    }
  };

  const mouseOver = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorLink(e, cursorRef.current);
    }
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', mouseLeave);
    document.body.addEventListener('mouseenter', mouseEnter);
    document.body.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mousedown', mouseDown);
    document.body.addEventListener('mouseup', mouseUp);
    document.body.addEventListener('mouseover', mouseOver);

    return () => {
      document.body.removeEventListener('mouseleave', mouseLeave);
      document.body.removeEventListener('mouseenter', mouseEnter);
      document.body.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mousedown', mouseDown);
      document.body.removeEventListener('mouseup', mouseUp);
      document.body.removeEventListener('mouseover', mouseOver);
    };
  });

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>{devName}</title>
      </Head>
      <div id="app-container">
        <CSSTransition
          in={showLoading}
          timeout={1000}
          classNames="opacity-transition"
          unmountOnExit
        >
          <LoadingScreen />
        </CSSTransition>
        <Component {...pageProps} />
      </div>
      <div className="cursor" ref={cursorRef} style={{}}>
        <div className="cursor-inside">
          <CgArrowAlignH />
        </div>
      </div>
    </>
  );
}

export default MyApp;
