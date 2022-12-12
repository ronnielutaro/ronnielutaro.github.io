/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React,{Fragment} from 'react';
import Head from 'next/head';
import { 
    defaultSiteTitle, 
    defaultSiteDescription, 
    siteImage, 
    twitterUsername,
    siteURL 
} from '../constants/siteMeta';

export default function index() {
  return (
    <Fragment>
        <Head>
            <title>{`${defaultSiteTitle} | Home`}</title>
            <meta name="description" content={defaultSiteDescription} key="desc" />
            <meta property="og:title" content={`${defaultSiteTitle} | Home`} />
            <meta property="og:description" content={defaultSiteDescription} />
            <meta property="og:url" content={siteURL} />
            <meta property="og:image" content={siteImage} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:description" content={defaultSiteDescription} />
        </Head>
    </Fragment>
  )
}
