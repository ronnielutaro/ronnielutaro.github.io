/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react';
import Head from 'next/head';
import { profile } from '../data/profile';
import { 
    defaultSiteTitle, 
    defaultSiteDescription,
    twitterUsername,
    siteURL 
} from '../constants/siteMeta';
import Link from 'next/link';
import AboutHeader from '../components/UI/AboutHeader';
import CallToAction from '../components/UI/CallToAction';

export default function about() {
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
        <AboutHeader />
        {/* Post text */}
        <section className="project-text p-90-0-90">
            <div id="anchor-1" className="container">
                <div className="row">
                    <div className="col-12 col-lg-2 text-center a-f">
                    </div>
                    <div className="col-12 col-lg-10 a-f">
                        {/* Quote */} 
                        <div className="author p-60-0-60">
                            <div className="rv-cont">
                                <div className="avatar-lg">
                                    {/* Author photo */}
                                    <picture>
                                        <img src={profile.avatar.src} alt="author" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        {/* Text */}
                        <p className="light opas">
                            Hi there! 👋 I&apos;m Ronnie Lutalo, a Software Engineer that enjoys building great Products from end. 
                            I have experience with Software Development and Project Management both as a Leader and as an Individual 
                            Contributor. Over time, I&apos;ve worked on various projects involving development of Backend Services, 
                            Windows Applications and Full Stack Web Applications. I mostly code using C# but also use Tools like ASP.NET Core, 
                            SQL, Entity Framework Core, WPF, JavaScript/TypeScript, HTML, CSS, React.js/Next.js.
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas">
                            Currently working on both commercial and Open Source Technology. As an Enthusiast, 
                            I engage both as a Contributor & Technical Lead at Open Source Community Africa (OSCA) - Kampala where 
                            we are changing the narrative from having Ugandans not only as users of technology but also as contributors. 
                            I also work as a Consultant at United Nations Women with other experienced professionals to share 
                            Technical knowledge, experience and Mentorship for the African Girls Can Code Initiative (AGCCI) 
                            aimed at empowering young girls across Africa to become computer programmers, creators and designers.
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas">
                            Outside work, you might find me cheering my favorite sports team. 
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas mb-30">
                            Have an Idea you&apos;d like to share, suggest or collaborate with me on? Try leaving me a message. 
                            I&apos;m always excited to talk about Software Engineering, Windows Development, 
                            Product Development, Web Development, and Technology in general so feel free to reach out anytime. 
                            The best way to reach me is through email - ronnielutaro@gmail.com and Direct messaging on Twitter or LinkedIn.
                        </p>
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
                    </div>
                </div>
            </div>
        </section>
        {/* Post text end */}
        
        <CallToAction />
    </>
  )
}
