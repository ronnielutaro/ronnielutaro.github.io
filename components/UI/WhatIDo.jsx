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
                        <p className="light opas mb-30">
                            Currently working on both commercial and Open Source Technology. As an Enthusiast, 
                            I engage both as a Contributor & Technical Lead at Open Source Community Africa (OSCA) - Kampala where 
                            we are changing the narrative from having Ugandans not only as users of technology but also as contributors. 
                            I also work as a Consultant at United Nations Women alongside other experienced professionals to share 
                            Technical knowledge, experience and Mentorship for the African Girls Can Code Initiative (AGCCI) 
                            aimed at empowering young girls across Africa to become computer programmers, creators and designers.

                            This is my personal website where I share my thoughts and write about software engineering, 
                            product development, and more.
                            I also talk about new & recent stuff I&apos;m working on while sharing some lessons learnt along the way.
                            If you&apos;re also looking to explore some of my recent work or projects, then you&apos;re in the right place!
                        </p>
                        {/* Button */}
                        <Link href="/about" className="button button-1 new-page-right" passHref>More about Me <i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* Info end */}
    </>
  )
}
