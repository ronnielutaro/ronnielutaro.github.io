import { useState, useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { CSSTransition } from 'react-transition-group';

import TopMenu from '../TopMenu';
import LoadingScreen from '../LoadingScreen';
import { PageMain } from '../Layout';
import theme from '../../global/theme';

import {
  devName,
  siteMetaDescription,
  appBaseUrl,
} from '../../global/defaultValues';
import { RootProps } from './Root.types';

function Root({
  title = devName,
  description = siteMetaDescription,
  banner = `${appBaseUrl}/og-image.jpg`,
  children,
}: RootProps) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 100);

    Aos.refresh();

    setTimeout(() => {
      Aos.refresh();
    }, 4000);
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.primary} />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/apple-touch-icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>{title}</title>
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={banner} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@r_lutalo" />
        <meta name="twitter:creator" content="@r_lutalo" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={banner} />
      </Head>
      <>
        <TopMenu setShowLoading={setShowLoading} />
        <PageMain>{!showLoading && <>{children}</>}</PageMain>
        <CSSTransition
          in={showLoading}
          timeout={300}
          classNames="opacity-transition"
          unmountOnExit
        >
          <LoadingScreen />
        </CSSTransition>
      </>
    </>
  );
}

export default Root;
