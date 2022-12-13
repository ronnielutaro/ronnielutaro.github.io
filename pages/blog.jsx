/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'
import Head from 'next/head';
import { 
    defaultSiteTitle, 
    siteImage, 
    twitterUsername,
    siteURL 
} from '../constants/siteMeta';
import Link from 'next/link';
import Date from '../components/UI/Date';
import { profile } from '../data/profile';
import { getSortedPostsData } from '../helpers/posts'
import BlogHeader from '../components/UI/BlogHeader';

export default function blog({ allPostsData }) {
  return (
    <>
        <Head>
            <title>{`${defaultSiteTitle} | Blog`}</title>
            <meta name="description" content={`Articles written by ${profile.fullName}`} key="desc" />
            <meta property="og:title" content={`${defaultSiteTitle} | Blog`} />
            <meta property="og:description" content={`Articles written by ${profile.fullName}`} />
            <meta property="og:url" content={`${siteURL}blog`} />
            <meta property="og:image" content={siteImage} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:description" content={`Articles written by ${profile.fullName}`} />
        </Head>
        <BlogHeader />
        {/* Publication */}
        <ul>
            {allPostsData.map(({ id, date, title, summary, coverImage }) => (
                <li key={id}>
                <section className="project-text p-90-0-0">
                <div id="anchor-1" className="container">
                    <div className="row a-f">
                        <div className="col-12 col-lg-2 text-center">
                            {/* Author */}
                            <div className="review">
                                <div className="rv-cont">
                                    <div className="avatar-sm">
                                        {/* Author photo */}
                                        <picture>
                                            <img src="/images/people/pic1.jpg" alt="author" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="rv-cont">
                                    {/* Name */}
                                    <p className="text-title mb-10">by {profile.fullName}</p>
                                </div>
                            </div>
                            {/* Author end */}
                            {/* Date */}
                            <p className="light opas mb-60"><Date dateString={date} /></p>
                        </div>
                        <div className="col-12 col-lg-10">
                            {/* Publication  cover */}
                            <picture>
                                <img className="pub-cover mb-30" src={coverImage} alt="Publication cover" />
                            </picture>
                            {/* Title */}
                            <h2 className="bold mb-30">{title}</h2>
                            {/* Text */}
                            <p className="light opas mb-30">{summary}</p>
                            <hr className="mb-30" />
                            <div className="text-center text-md-left">
                                {/* Button */}
                                <Link href={`/blog/${id}`} className="button margin-sm-bottom button-1 new-page-in">Read more <i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </li>
        ))}
        </ul>
        {/* Publication end */}
    </>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  
