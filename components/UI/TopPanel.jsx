import Link from 'next/link'
import React from 'react'

export default function TopPanel() {
  return (
    <>
        {/* Top panel */}
        <div className="top-panel">
            {/* Logo */}
            <div className="logo">
                <Link href="/">
                    {/* Image logo */}
                    <picture>
                    <img src="images/logo.png" alt="logo"></img>
                    </picture>
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
