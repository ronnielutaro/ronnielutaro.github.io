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
        <footer class="footer p-90-0-60">
            {/* dotted background */}
            <div class="dots"></div>
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left footer-content mb-30">
                    <div class="col-12 col-md-12 col-lg-8 mb-30">
                        {/* Logo */}
                        <div class="logo mb-30">
                            <Link href="index-2.html" class="new-page">
                                {/*<img style="width: 100px;" src="img/your_logo.png" alt="logo">*/}
                            </Link>
                        </div>
                        {/* Logo end */}
                        {/* Footer text */}
                        <p class="light opas mb-30">Software Engineer | Designer | CG Artist </p>
                        {/* Phone */}
                        <p class="cont light mb-10"><i class="color fas fa-envelope"></i><span class="color">email:</span> ronnielutaro@gmail.com</p>
                        {/* Adres */}
                        <p class="cont light"><i class="color fas fa-map-marker-alt"></i><span class="color">address:</span> Kampala, Uganda</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 mb-30">
                        {/* Title */}
                        <h5 class="up bold mb-30">Menu</h5>
                        {/* Footer list 1 */}
                        <ul>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">Home page</Link></li>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">About us</Link></li>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">Portfolio</Link></li>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">Blog</Link></li>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">Get in touch</Link></li>
                        </ul>
                        {/* Footer list 1 end */}
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 mb-30">
                        {/* Title */}
                        <h5 class="up bold mb-30">Useful links</h5>
                        {/* Footer list 2 */}
                        <ul>
                            {/* Footer list item */}
                            <li class="footer-link mb-10"><Link href="#.">Privacy policy</Link></li>
                        </ul>
                        {/* Footer list 2 end*/}
                    </div>
                </div>
                <div class="row copy">
                    <div class="col-12 col-lg-6 align-self-center mb-30">
                        {/* Social Icons */}
                        <ul class="social">
                            {/* Social link */}
                            <li><a href={profile.socialLinks.Twitter} target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
                            {/* Social link */}
                            <li><a href={profile.socialLinks.LinkedIn} target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>
                            {/* Social link */}
                            <li><a href={profile.socialLinks.GitHub} target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
                            {/* Social link */}
                            <li><a href={profile.socialLinks.Instagram} target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                            {/* Social link */}
                            <li><a href={profile.socialLinks.Facebook} target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6 text-center text-md-left text-lg-right align-self-center mb-30">
                        {/* Copyright */}
                        <p class="light"><span class="opas">Copyright © {year}. All rights reserved:</span> <a class="color" href="#">Ronnie Lutalo</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
