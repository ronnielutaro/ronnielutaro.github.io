import React from 'react';
import PageTitle from '../../components/Layout/PageTitle';
import Link from 'next/link';
import { getSortedPostsData } from '../../helpers/posts'
import Date from '../../components/UI/Date'
import Head from 'next/head';
import { profile } from '../../data/profile';
import { 
    defaultSiteTitle, 
    twitterUsername,
    siteURL,
    siteImage 
} from '../../constants/siteMeta';

export default function engineering({ allPostsData }) {
    return (
        <>
            <Head>
                <title>{`${defaultSiteTitle} | Engineering Blog`}</title>
                <meta name="description" content={`Articles on Engineering written by ${profile.fullName}`} key="desc" />
                <meta property="og:title" content={`${defaultSiteTitle} | Engineering Blog`} />
                <meta property="og:description" content={`Articles on Engineering written by ${profile.fullName}`} />
                <meta property="og:url" content={`${siteURL}blog/engineering`} />
                <meta property="og:image" content={siteImage} />
                <meta name="twitter:creator" content={twitterUsername} />
                <meta name="twitter:description" content={`Articles on Engineering written by ${profile.fullName}`} />
            </Head>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "/images/banner/bnr3.jpg" }}>
                    <PageTitle motherMenu='Engineering Blog' activeMenu='Engineering Blog' />
                </div>
                <div className="content-area">
                    <div className="container">
                        <div className="row">
                            {/* Engineering Blog Posts List Start */}
                            <div className="col-lg-9">
                                {allPostsData.map(({id, date, title, excerpt, coverImage, coverImageDescription})=>(	
                                    <div className="blog-post blog-md clearfix" key={id}>
                                        <div className="dlab-post-media dlab-img-effect zoom-slow">
                                            <Link href={`/blog/${id}`}>
                                                <picture>
                                                    <img src={coverImage} alt={coverImageDescription} />
                                                </picture>
                                            </Link>
                                        </div>
                                        <div className="dlab-post-info">
                                            <div className="dlab-post-title ">
                                                <h4 className="post-title"><Link href={`/blog/${id}`}>{title}</Link></h4>
                                            </div>
                                            <div className="dlab-post-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong> <Date dateString={date} /> </strong></li>
                                                    <li className="post-author"><i className="fa fa-user"></i>By <Link href="/about">Ronnie Lutalo</Link> </li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> <Link href="#">0</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>{excerpt}</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <Link href={`/blog/${id}`} title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </Link>
                                                <div className="share-btn">
                                                    <ul className="clearfix">
                                                        <li><Link href="#" className="site-button sharp"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link href="#" className="site-button sharp"><i className="fa fa-google-plus"></i></Link></li>
                                                        <li><Link href="#" className="site-button sharp"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link href="#" className="site-button sharp"><i className="fa fa-twitter"></i></Link></li>
                                                        <li className="share-button"><Link href="#" className="site-button sharp"><i className="fa fa-share-alt"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pagination-bx clearfix text-center">
                                    <ul className="pagination">
                                        <li className="previous"><Link href="#"><i className="ti-arrow-left"></i> Prev</Link></li>
                                        <li className="active"><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li className="next"><Link href="#">Next <i className="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Engineering Blog Posts List End */}
                            <div className="col-lg-3 sticky-top">

                            {/* Sidebar Start */}
                            {/* Sidebar End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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