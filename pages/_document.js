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
        {/* Bootstrap */}
        <script src="/plugins/bootstrap.min.js" async />
      </body>
    </Html>
  )
}