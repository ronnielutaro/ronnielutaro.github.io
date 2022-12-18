/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
  return (
    <>
    {/* Call To Action */}
    <section className="call-to-action" style={{backgroundImage: "url(/images/portfolio/lg/2.jpg)", backgroundPosition: "center"}}>
        {/* Gradient overlay */}
        <div className="overlay-2 p-0-0-90">
            <div className="container text-center">
                <h2 className="bold mb-30">Let&apos;s get in touch </h2>
                <p className="light opas mb-30">Drop me a line for inquiries, collaborations, speaking engagements, or just to say hello. <br /> I&apos;m always excited to meet new people. <br />Almost all the time!</p>
                {/* Button */}
                <Link href="/contact" className="button button-1 new-page mb-30" passHref>Contact Me <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
        {/* Gradient overlay end */}
    </section>
    </>
  )
}
