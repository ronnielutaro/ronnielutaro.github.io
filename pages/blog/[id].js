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
                <section class="project-text p-90-0-90">
                    <div id="anchor-1" class="container">
                        <div class="row">
                            <div class="col-12 col-lg-2 text-center a-f">
                                {/* Author */}
                                <div class="review">
                                    <div class="rv-cont">
                                        <div class="avatar-sm">
                                            {/* Author photo */}
                                            <picture>
                                                <img src={profile.avatar.src} alt="author" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div class="rv-cont text-center">
                                        {/* Name */}
                                        <p class="text-title mb-15">by {profile.fullName}</p>
                                    </div>
                                </div>
                                {/* Author end */}
                                {/* Date */}
                                <p class="light opas mb-60"><Date dateString={postData.date} /> </p>
                            </div>
                            <div class="col-12 col-lg-10 a-f">
                                {/* Title */}
                                <h2 class="bold mb-30">{postData.title}</h2>
                                {/* Text */}
                                <div  class="light opas mb-30" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                            
                                {/* Social icons */}
                                <ul class="social mb-60">
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
                                <hr class="mb-60" />
                                <div class="text-center text-md-left">
                                    {/* Button */}
                                    <a href="/blog" class="button margin-sm-bottom button-1 new-page">More publications <i class="fas fa-chevron-right"></i></a>
                                    {/* Button */}
                                    <a href="#" class="button new-page-right">Next publication <i class="fas fa-chevron-right"></i></a>
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