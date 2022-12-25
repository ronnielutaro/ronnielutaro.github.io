/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'
import { profile } from '../../data/profile';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <>
        <footer className="footer p-90-0-60">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left footer-content mb-30">
                    <div className="col-12 col-md-12 col-lg-8 mb-30">
                        {/* Footer text */}
                        <p className="light opas mb-30">Software Engineer | Designer | CG Artist </p>
                        {/* email */}
                        <p className="cont light mb-10"><i className="color fas fa-envelope"></i><span className="color">email:</span> ronnielutaro@gmail.com</p>
                        {/* Adres */}
                        <p className="cont light"><i className="color fas fa-map-marker-alt"></i><span className="color">address:</span> Kampala, Uganda</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mb-30">
                        {/* Title */}
                        <h5 className="up bold mb-30">Menu</h5>
                        {/* Footer list 1 */}
                        <ul>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="/">Home page</Link></li>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="/about">About me</Link></li>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="/work">Portfolio</Link></li>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="/blog">Blog</Link></li>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="/contact">Get in touch</Link></li>
                        </ul>
                        {/* Footer list 1 end */}
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mb-30">
                        {/* Title */}
                        <h5 className="up bold mb-30">Useful links</h5>
                        {/* Footer list 2 */}
                        <ul>
                            {/* Footer list item */}
                            <li className="footer-link mb-10"><Link href="#.">Privacy policy</Link></li>
                        </ul>
                        {/* Footer list 2 end*/}
                    </div>
                </div>
                <div className="row copy">
                    <div className="col-12 col-lg-6 align-self-center mb-30">
                        {/* Social Icons */}
                        <ul className="social">
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
                    </div>
                    <div className="col-12 col-lg-6 text-center text-md-left text-lg-right align-self-center mb-30">
                        {/* Copyright */}
                        <p className="light"><span className="opas">Copyright © {year}. All rights reserved:</span> <Link className="color" href="/about">Ronnie Lutalo</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
