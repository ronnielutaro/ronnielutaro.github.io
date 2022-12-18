/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react';
import { getAllPostIds, getPostData } from '../../helpers/posts'
import Date from '../../components/UI/Date'
import Head from 'next/head';
import { profile } from '../../data/profile';
import { 
    twitterUsername
} from '../../constants/siteMeta';
import BlogPostHeader from '../../components/UI/BlogPostHeader';
import Link from 'next/link';
import Image from 'next/image';

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
            <BlogPostHeader />
            {/* Post text */}
            <article>
                <section className="project-text p-90-0-90">
                    <div id="anchor-1" className="container">
                        <div className="row">
                            <div className="col-12 col-lg-2 text-center a-f">
                                {/* Author */}
                                <div className="review">
                                    <div className="rv-cont">
                                        <div className="avatar-sm">
                                            {/* Author photo */}
                                            <Image src={profile.avatar.src} alt="author" />
                                        </div>
                                    </div>
                                    <div className="rv-cont text-center">
                                        {/* Name */}
                                        <p className="text-title mb-15">by {profile.fullName}</p>
                                    </div>
                                </div>
                                {/* Author end */}
                                {/* Date */}
                                <p className="light opas mb-60"><Date dateString={postData.date} /> </p>
                            </div>
                            <div className="col-12 col-lg-10 a-f">
                                {/* Title */}
                                <h2 className="bold mb-30">{postData.title}</h2>
                                {/* Text */}
                                <div  className="light opas mb-30" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                            
                                {/* Social icons */}
                                <ul className="social mb-60">
                                    {/* Social link */}
                                    <li><a href={profile.socialLinks.Twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    {/* Social link */}
                                    <li><a href={profile.socialLinks.LinkedIn} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                    {/* Social link */}
                                    <li><a href={profile.socialLinks.GitHub} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                                    {/* Social link */}
                                    <li><a href={profile.socialLinks.Instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    {/* Social link */}
                                    <li><a href={profile.socialLinks.Facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                                </ul>
                                {/* Social icons end */}
                                <hr className="mb-60" />
                                <div className="text-center text-md-left">
                                    {/* Button */}
                                    <Link href="/blog" className="button margin-sm-bottom button-1 new-page">More publications <i className="fas fa-chevron-right"></i></Link>
                                    {/* Button */}
                                    <Link href="#" className="button new-page-right">Next publication <i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            {/* Post text end */}
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }