/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'

export default function CallToAction() {
  return (
    <>
    {/* Call to action */}
    <section className="call-to-action" style={{backgroundImage: "url(/images/portfolio/lg/2.jpg)", backgroundPosition: "center"}}>
        {/* Gradient overlay */}
        <div class="overlay-2 p-0-0-90">
            <div class="container text-center">
                <h2 class="bold mb-30">What are you waiting for? <br /> <span class="color">Kickstart</span> your <span class="color">dream</span> <br />project today.</h2>
                <p class="light opas mb-30">Drop me a line for inquiries, collaborations, speaking engagements, or just to say hello. <br /> I&apos;m always excited to meet new people. <br />Almost all the time!</p>
                {/* Button */}
                <a href="#" class="button button-1 new-page mb-30">Contact Me <i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
        {/* Gradient overlay end */}
    </section>
    {/* Call to action */}
    </>
  )
}
