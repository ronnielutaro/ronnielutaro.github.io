import { Html, Head, Main, NextScript } from 'next/document'

const name = 'Ronnie Lutalo'
export const siteTitle = 'Ronnie Lutalo'

export const siteDescription = `Software Engineer | Designer | CG Artist from Kampala, Uganda. 
Ronnie Lutalo writes about new & recent stuff he's working on while sharing some lessons learnt along the way.
From Product development, Software Applications, Extended Reality (Virtual Reality), Game Design (Unity-3D 
& C#), Web design & development, 2D/3D Computer Graphics & Animation, to contributing to the Open Source Community.`;

// Path to the image that is placed in the 'public/images' folder.
export const siteImage = '/images/site-meta-image-01.png';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={siteDescription} key="desc" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}