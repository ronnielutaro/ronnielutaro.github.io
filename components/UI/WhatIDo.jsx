/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'

export default function WhatIDo() {
  return (
    <>
        {/* Info */}
        <section id="info" className="info p-60-0-60">
            <div className="container">
                <div className="row">
                    <div id="anchor-2" className="col-12 col-lg-12 mb-30">
                        {/* Section title */}
                        <h2 className="bold mb-20">What I Do? </h2>
                        {/* Text */}
                        <p className="light opas mb-15">Well...</p>
                        {/* Text */}
                        <p className="light opas mb-30">
                            My name is Ronnie Lutalo and I&apos;m a Software Engineer, Designer & CG Artist from Kampala, Uganda.
                            Over time I&apos;ve worked on various projects involving Software Engineering, 
                            Design, Computer Graphics (2D/3D).
                            Most people believe Art and Science are separate fields, which is academically correct
                            but personally, I believe everything is connected to everything else. 
                            Art & Science have no reason to be disconnected and that&apos;s
                            exactly how I view the world and approach life.
                            I mostly code using C# but also work with a few other Tools like ASP.NET Core, SQL,
                            Entity Framework Core, WPF, JavaScript/TypeScript, HTML, CSS, React.js/Next.js,
                            Unity 3D Engine.
                        </p>
                        {/* Button */}
                        <Link href="/about" className="button button-1 new-page-right">More about Me <i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* Info end */}
    </>
  )
}
