/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'
import { profile } from '../../data/profile';

export default function SocialMediaButtons() {
  return (
    <>
        {/* Social icons */}
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
        {/* Social icons end */}
    </>
  )
}
