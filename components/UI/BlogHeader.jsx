/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'

export default function BlogHeader() {
  return (
    <>
        {/* Header */}
        <header id="header" className="header-sm">
            {/* header background */}
            <div className="header-bg" style={{ backgroundImage: "url(/images/portfolio/lg/2.jpg)", backgroundPosition: "center" }}>
                {/* Gradient overlay */}
                <div className="overlay"></div>
            </div>
            {/* header background end */}
            <div className="container header-content">
                <div className="main-title">
                    {/* Main-title */}
                    <h1 className="bold mb-30 a-f">Personal <span className="color">Blog</span></h1>
                    {/* breadcrumbs */}
                    <div className="breadcrumbs a-f">
                        <ul>
                            {/* breadcrumbs link */}
                            <li><Link href="/">Home</Link></li>
                            {/* Active page */}
                            <li className="active">Blog</li>
                        </ul>
                    </div>
                    {/* breadcrumbs end */}
                </div>
            </div>
        </header>
        {/* Header end */}
    </>
  )
}
