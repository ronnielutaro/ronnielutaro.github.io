/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'

export default function WhatIDo() {
  return (
    <>
        {/* Info */}
        <section id="info" class="info p-60-0-60">
            <div class="container">
                <div class="row">
                    <div id="anchor-2" class="col-12 col-lg-12 mb-30">
                        {/* Section title */}
                        <h2 class="bold mb-20">What I Do? </h2>
                        {/* Text */}
                        <p class="light opas mb-15">Hello there!</p>
                        {/* Text */}
                        <p class="light opas mb-30">
                            My name is Ronnie Lutalo, a Software Engineer, Designer & CG Artist.
                            Well, obviously there&apos;s much more to me than just a few fancy titles that don&apos;t 
                            really mean anything, hahah...
                            Over time I&apos;ve worked on various projects involving Software Engineering, 
                            Design, Computer Graphics (2D/3D).
                            Most people believe Art and Science are separate fields. Of which that&apos;s academically correct
                            but I personally believe everything is connected to everything else. 
                            Art & Science have no reason to be disconnected and that&apos;s
                            exactly how I view the world and approach life.
                            I mostly code using C# but also work with a few other Tools like ASP.NET Core, SQL,
                            Entity Framework Core, WPF, JavaScript/TypeScript, HTML, CSS, React.js/Next.js,
                            Unity 3D Engine.
                            Outside all that, you can find me blogging or cheering my favorite sports team.
                        </p>
                        {/* Button */}
                        <a href="#" class="button button-1 new-page-right">More about Me <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
        {/* Info end */}
    </>
  )
}
