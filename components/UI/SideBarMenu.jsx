/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'
import { profile } from '../../data/profile';

export default function SideBarMenu() {
  return (
    <>
        {/* Sidebar Menu */}
        <div className="sidebar">
            {/* dotted background */}
            <div className="dots"></div>
            {/* Open button */}
            <div className="menu-btn hover menu-open"><i className="fas fa-bars"></i></div>
            {/* Close button */}
            <div className="menu-btn hover menu-close"><i className="fas fa-times"></i></div>
            {/* Language */}
            <div className="lang">
                <p>Language:</p>
                <a href="#." className="active">EN</a>
            </div>
            {/* Language end */}
            {/* Menu */}
            <ul className="menu">
                {/* Menu item */}
                <li className="menu-item">
                    <Link href="/" className="menu-link new-page-sidebar">Home</Link>
                </li>
                {/* Menu item */}
                <li className="menu-item">
                    <Link href="#" className="menu-link new-page-sidebar">About</Link>
                </li>
                {/* Menu item */}
                <li className="menu-item">
                    <Link href="#" className="menu-link new-page-sidebar">Work</Link>
                </li>
                {/* Menu item */}
                <li className="menu-item">
                    <Link href="#" className="menu-link new-page-sidebar">Blog</Link>
                </li>
                {/* Menu dropdown item end */}
                <li className="menu-item">
                    {/* Menu link */}
                    <Link href="#" className="menu-link new-page-sidebar">Contact</Link>
                </li>
                {/* Social icons */}
                <li>
                    <ul className="social mt-15">
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
                </li>
                {/* Social icons end */}
            </ul>
            {/* Menu end */}
        </div>
        {/* Sidebar Menu end */}
    </>
  )
}
