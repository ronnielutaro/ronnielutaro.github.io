import React from 'react';
import PageTitle from '../../components/Layout/PageTitle';
import { getAllPostIds, getPostData } from '../../helpers/posts'
import Date from '../../components/UI/Date'
import Link from 'next/link';
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
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "/images/banner/bnr5.jpg" }}>
                    <PageTitle motherMenu='Blog' activeMenu='Blog Details' />
                </div>
                <div className="content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-9">
                                <div className="blog-post blog-single">
                                    <div className="dlab-post-title ">
                                        <h2 className="post-title m-t0"><Link href="#">{postData.title}</Link></h2>
                                    </div>
                                    <div className="dlab-post-meta m-b20">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date"> <i className="fa fa-calendar"></i><strong><Date dateString={postData.date} /></strong> </li>
                                            <li className="post-author"><i className="fa fa-user"></i>By<Link href="/about"> Ronnie Lutalo</Link> </li>
                                            <li className="post-comment"><i className="fa fa-comments"></i><Link href="#">0 Comments</Link></li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="#">
                                            <picture>
                                                <img src={postData.coverImage} alt={postData.coverImageDescription} />
                                            </picture>
                                        </Link>
                                    </div>
                                    <article>
                                    <div className="dlab-post-text">
                                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                                    </div>
                                    </article>
                                    <div className="dlab-post-tags clear">
                                        <div className="post-tags">
                                            <Link href="#">Engineering </Link> 
                                            <Link href="#">Debugging </Link> 
                                            <Link href="#">Trouble-Shooting </Link>
                                        </div>
                                    </div>
                                    <div className="dlab-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>
                                    <div className="share-details-btn">
                                        <ul>
                                            <li><h5 className="m-a0">Share Post</h5></li>
                                            <li><Link href="#" className="site-button facebook button-sm"><i className="fa fa-facebook"></i> Facebook</Link></li>
                                            <li><Link href="#" className="site-button google-plus button-sm"><i className="fa fa-google-plus"></i> Google Plus</Link></li>
                                            <li><Link href="#" className="site-button linkedin button-sm"><i className="fa fa-linkedin"></i> Linkedin</Link></li>
                                            <li><Link href="#" className="site-button instagram button-sm"><i className="fa fa-instagram"></i> Instagram</Link></li>
                                            <li><Link href="#" className="site-button twitter button-sm"><i className="fa fa-twitter"></i> Twitter</Link></li>
                                            <li><Link href="#" className="site-button whatsapp button-sm"><i className="fa fa-whatsapp"></i> Whatsapp</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3 sticky-top">
                                {/* Sidebar */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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