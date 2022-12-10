import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import TestimonialCarousel from '../components/UI/TestimonialCarousel';
import FormStyle from '../components/UI/FormStyle';
import Head from 'next/head';
import { profile } from '../data/profile';
import { 
    defaultSiteTitle, 
    defaultSiteDescription,
    twitterUsername,
    siteURL 
} from '../constants/siteMeta';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>{`${defaultSiteTitle} | About`}</title>
                    <meta name="description" content={defaultSiteDescription} key="desc" />
                    <meta property="og:title" content={`${defaultSiteTitle} | About`} />
                    <meta property="og:description" content={defaultSiteDescription} />
                    <meta property="og:url" content={`${siteURL}about`} />
                    <meta property="og:image" content={profile.avatar.src} />
                    <meta name="twitter:creator" content={twitterUsername} />
                    <meta name="twitter:description" content={defaultSiteDescription} />
                </Head>
                <div className="page-content bg-white">
					<div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: `images/banner/bnr2.jpg` }}>
						<PageTitle motherMenu='About Me' activeMenu='About Me' />
					</div>	
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <picture>
                                            <img src={profile.avatar.src} data-tilt alt={profile.avatar.alt} />
                                        </picture>
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box left row m-lr0 ">
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">Who? Me?<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Well...</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>
                                                    My name is Ronnie Lutalo, a Software Engineer, Designer and CG Artist from Kampala, Uganda.
                                                </p>
                                                <p>
                                                    I spend my time working on Algorithmic problems, coding, designing and sketching User Experience diagrams
                                                    or product designs in my note book, or researching about Computer Graphics. 
                                                    Outside all that, you might find me exploring Computer Graphics or cheering my favorite
                                                    sports team. In case you want to know more about what kind of stuff I work on, consider <Link href="/work" className='text-primary'>exploring my Work section</Link>.
                                                    In case you get curious and want to know more,
                                                    consider <Link href="/contact" className='text-primary'>reaching out</Link> and I&apos;ll get back to you shortly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
							
                    </div>
                </div>
            </>
        )
    }
}

export default About;