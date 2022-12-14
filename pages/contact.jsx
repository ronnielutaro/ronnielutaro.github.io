/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'
import Head from 'next/head';
import { defaultSiteTitle, siteImage, twitterUsername, siteURL } from '../constants/siteMeta';
import { profile } from '../data/profile';
import ContactHeader from '../components/UI/ContactHeader';

export default function contact() {
  return (
    <>
        <Head>
            <title>{`${defaultSiteTitle} | Contact`}</title>
            <meta name="description" content={`Contact ${profile.fullName}`} key="desc" />
            <meta property="og:title" content={`${defaultSiteTitle} | Contact`} />
            <meta property="og:description" content={`Contact ${profile.fullName}`} />
            <meta property="og:url" content={`${siteURL}contact`} />
            <meta property="og:image" content={siteImage} />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:description" content={`Contact ${profile.fullName}`} />
        </Head>
        <ContactHeader />
        {/* Contact info */}
        <div className="services p-90-0-60 a-f">
            <div className="container">
                <div id="anchor-1" className="row text-center">
                    {/* Contact item */}
                    <div className="col-12 col-md-4 mb-30">
                        {/* Icon */}
                        <picture>
                            <img src="/images/icons/i-location.svg" className="icon mb-30" alt="icon" />
                        </picture>
                        {/* Info */}
                        <p className="text-title mb-15">{profile.location.name}</p>
                        {/* Text */}
                        <p className="light opas">Location</p>
                    </div>
                    {/* Contact item end */}
                    {/* Contact item */}
                    <div className="col-12 col-md-4 mb-30">
                        {/* Icon */}
                        <picture>
                            <img src="/images/icons/i-message.svg" className="icon mb-30" alt="icon" />
                        </picture>
                        {/* Info */}
                        <p className="text-title mb-15">{profile.contact.email}</p>
                        {/* Text */}
                        <p className="light opas">Mail</p>
                    </div>
                    {/* Contact item end */}
                </div>
            </div>
        </div>
        {/* Contact info end */}
        <div className="get-in-touch">
            <div id="anchor-2" className="container">
                <form id="form" className="contact-form row">
                    <div className="form-field col-12 col-lg-6">
                        <input id="name" name="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col-12 col-lg-6">
                        <input id="email" name="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field col-12">
                        <input id="message" name="text" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field col-12 text-center">
                        <div className="submit-frame"><button className="submit hover button button-1" type="submit" value="Submit">Send message <i className="fas fa-chevron-right"></i></button></div>
                        <p className="success">Success <i className="fas fa-check"></i></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
