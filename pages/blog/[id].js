/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react';
import { getAllPostIds, getPostData } from '../../helpers/posts'
import Head from 'next/head';
import { profile } from '../../data/profile';
import { 
    twitterUsername
} from '../../constants/siteMeta';

export default function Post({ postData }) {

    return (
        <>
            <Head>
                <title>{`${postData.title} | ${profile.fullName}`}</title>
                <meta name="description" content={postData.excerpt} key="desc" />
                <meta property="og:title" content={`${postData.title} | ${profile.fullName}`} />
                <meta property="og:description" content={postData.excerpt} />
                <meta property="og:image" content={postData.coverImage} />
                <meta property="og:type" content="article" />
                <meta name="twitter:creator" content={twitterUsername} />
                <meta name="twitter:description" content={postData.excerpt} />   
            </Head>
        </>
    )
}