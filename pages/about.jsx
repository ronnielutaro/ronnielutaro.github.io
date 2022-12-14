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
                            Hi! 👋 I&apos;m Ronnie Lutalo, Software Engineer, Designer and Computer Graphics (2D/3D) Artist from Kampala, Uganda. 
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas">
                             I&apos;m passionate and always curious about both Art and Science. I personally believe everything in the universe
                            is literally connected to everything else and appreciate it that way. I think we interact with both Art & Science 
                            cocurrently almost without even noticing.
                            I often find my self working with sketches in my note books to visualize my ideas. From
                            Software Engineering projects, to my personal, non technical and design projects alike. I feel 
                            that helps me think more clearly and critically. Similaryly, I could find my self
                            trying to solve certain problems I&apos;ve encountered by maybe creating a Software Program for it or something. 
                            It&apos;s not quite obvious while at it until you ponder about your most recent actions, then you&apos;ll realize
                            how really everything is connected to everything else despite the way academia considers Art & Science to be distinct
                            fields of study.
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas">
                            I spend alot of my time working on Algorithmic problems, coding solutions, doing software and
                            product designs or feeding my curiosity with personal research on both Art and Science topics 
                            that may intrigue my mind at any particular moment in time. You can actually see some of my 
                            <Link href="/work"> work/projects</Link> overview for more technical details and descriptions.
                            Outside all that, you might find me <Link href="/blog">blogging</Link> or cheering my favorite sports team. 
                            I&apos;m into Soccer and Formula One Racing at the moment. 
                            A Huge fan of Sports teams like Sports Club Vipers, Manchester United, and Mercedes F1.
                        </p>
                        <br />
                        {/* Text */}
                        <p className="light opas mb-30">
                            Have an Idea you&apos;d like to share, suggest or collaborate with me on? Try leaving me a message. 
                            I always respond to all my messages. I&apos;m always excited to talk about Technology and Visual Arts 
                            so feel free to reach out anytime.
                            The best way to reach me is through email - ronnielutaro@gmail.com and Direct messaging on Twitter or Instagram.
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
