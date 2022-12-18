/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopPanel() {
  return (
    <>
        {/* Top panel */}
        <div className="top-panel">
            {/* Logo */}
            <div className="logo">
                <Link href="/" passHref>
                    {/* Image logo */}
                    <Image src="images/logo.png" alt="logo" />
                </Link>
            </div>
            {/* Logo end */}
            {/* Page navigation */}
            <ul className="navigation">
                {/* Navigation link */}
                <li><a className="default-link smooth-scroll" href="#anchor-1">Portfolio</a></li>
            </ul>
            {/* Page navigation end */}
        </div>
        {/* Top panel end */}
    </>
  )
}
