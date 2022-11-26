import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const name = 'Ronnie Lutalo'
export const siteTitle = 'Ronnie Lutalo'

export const siteDescription = `Software Engineer | CG Artist | XR (VR) developer from Kampala, Uganda. 
Ronnie Lutalo writes about new & recent stuff he is working on while sharing lessons learnt along the way.
From Product development, Software Applications, Extended Reality (Virtual Reality), Game Design (Unity-3D 
& C#), Web design & development, 2D/3D Computer Graphics & Animation, to contributing to the Open Source Community.`;

// Path to the image that is placed in the 'public/images' folder.
export const siteImage = '/images/site-meta-image-01.png';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={siteDescription} key="desc" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
