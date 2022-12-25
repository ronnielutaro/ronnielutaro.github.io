/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon  */}
        <Link rel="shortcut icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        {/* Color of address bar in mobile browser */}
        <meta name="theme-color" content="#191923" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* jQuery */}
        <script src="/lib/plugins/jquery.min.js" async />
        {/* Anime */}
        <script src="/lib/plugins/anime.min.js" async />
        {/* Smooth scroll */}
        <script src="/lib/plugins/smooth-scroll.min.js" async />
        {/* Howler */}
        <script src="/lib/plugins/howler.min.js" async />
        {/* Isotope */}
        <script src="/lib/plugins/isotope.min.js" async />
        {/* Tilt */}
        <script src="/lib/plugins/tilt.jquery.js" async />
        {/* Waypoints */}
        <script src="/lib/plugins/waypoint.js" async />
        {/* Bootstrap */}
        <script src="/lib/plugins/bootstrap.min.js" async />
        {/* Main */}
        <script src="/lib/main.js" async />
      </body>
    </Html>
  )
}