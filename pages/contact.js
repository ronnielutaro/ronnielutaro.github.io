import React, { Component } from 'react';
import Head from 'next/head';
import { defaultSiteTitle, siteImage, twitterUsername, siteURL } from '../constants/siteMeta';
import { profile } from '../data/profile';

class Contact extends Component {

    render() {
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
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "/images/background/bg2.jpg" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Address
													</h5>
                                                    <p>{profile.location.name} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        E-mail
													</h5>
                                                    <p className="m-b0">{profile.contact.email} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">Social Media </h5>
                                                    <p><a href={profile.socialLinks.Twitter} target="_blank" className="text-white" rel="noreferrer"><i className="fa fa-twitter"></i> Twitter </a></p>
                                                    <p><a href={profile.socialLinks.LinkedIn} target="_blank" className="text-white" rel="noreferrer"><i className="fa fa-linkedin"></i> Linkedin </a></p>
                                                    <p><a href={profile.socialLinks.GitHub} target="_blank" className="text-white" rel="noreferrer"><i className="fa fa-github"></i> GitHub</a></p>
                                                    <p><a href={profile.socialLinks.Instagram} target="_blank" className="text-white" rel="noreferrer"><i className="fa fa-instagram" rel="noreferrer"></i> Instagram </a></p>
                                                    <p><a href={profile.socialLinks.Facebook} target="_blank" className="text-white" rel="noreferrer"><i className="fa fa-facebook" rel="noreferrer"></i> Facebook </a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    <form className="inquiry-form dzForm"  action="script/contact.php">
                                        <div className="dzFormMsg"></div>
                                        <h3 className="box-title m-t0 m-b10">Let&apos;s get in touch <span className="bg-primary"></span></h3>
                                        <p>
                                            Drop me a line for inquiries, collaborations, speaking engagements, or just to say hello.
                                            I&apos;m always excited to meet new people.
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell me about your project, idea, or suggestions"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Send</span> </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>
            </>
        )
    }
}
export default Contact;