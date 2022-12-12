/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'
import SocialMediaButtons from './SocialMediaButtons';

export default function SideBarMenu() {
  return (
    <>
        {/* Sidebar Menu */}
        <div class="sidebar">
            {/* dotted background */}
            <div class="dots"></div>
            {/* Open button */}
            <div class="menu-btn hover menu-open"><i class="fas fa-bars"></i></div>
            {/* Close button */}
            <div class="menu-btn hover menu-close"><i class="fas fa-times"></i></div>
            {/* Language */}
            <div class="lang">
                <p>Language:</p>
                <a href="#." class="active">EN</a>
            </div>
            {/* Language end */}
            {/* Menu */}
            <ul class="menu">
                {/* Menu item */}
                <li class="menu-item">
                    <Link href="/" class="menu-link new-page-sidebar">Home</Link>
                </li>
                {/* Menu item */}
                <li class="menu-item">
                    <Link href="#" class="menu-link new-page-sidebar">About</Link>
                </li>
                {/* Menu item */}
                <li class="menu-item">
                    <Link href="#" class="menu-link new-page-sidebar">Work</Link>
                </li>
                {/* Menu item */}
                <li class="menu-item">
                    <Link href="#" class="menu-link new-page-sidebar">Blog</Link>
                </li>
                {/* Menu dropdown item end */}
                <li class="menu-item">
                    {/* Menu link */}
                    <Link href="#" class="menu-link new-page-sidebar">Contact</Link>
                </li>
                {/* Social icons */}
                <li>
                    <ul class="social mt-15">
                        <SocialMediaButtons />
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
