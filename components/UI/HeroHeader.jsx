/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

import React from 'react'

export default function HeroHeader() {
  return (
    <>
      {/* Header */}
      <header id="header" className="header">
          {/* header slideshow */}
          <div className="swiper-container swiper-header-slideshow">
              <div className="swiper-wrapper">
                  <div className="header-slide swiper-slide" style={{backgroundImage: "url(images/portfolio/lg/2.jpg)", backgroundPosition: "bottom"}}></div>
              </div>
          </div>
          {/* header slideshow end */}
          {/* Gradient overlay */}
          <div className="overlay"></div>
          {/* header background end */}
          <div className="container header-content">
              <div className="main-title text-center">
                  {/* Main-title */}
                  <h3 className="bold a-f mb-20">Ronnie<span className="color"> Lutalo</span></h3>
                  <h5 className="bold a-f mb-20">Software Engineer | Designer | CG Artist </h5>
                    <p className="mb-20">
					    Driven by desire and curiosity for creating Technology and Experiences <br/> that unlock new possibilities.
				    </p>
                  <div className="main-title-buttons a-f">
                      {/* Button */}
                      <a href="#" className="button button-1 margin-sm-bottom new-page">Contact Me <i className="fas fa-chevron-right"></i></a>
                      {/* Button */}
                      <a href="#anchor-1" className="button smooth-scroll">Discover Now <i className="fas fa-chevron-right"></i></a>
                  </div>
              </div>
              {/* Scroll hint */}
              <div className="scroll-hint">
                  <a href="#anchor-1" className="smooth-scroll">
                      {/* Mouse */}
                      <div className="mouse">
                          {/* Finger */}
                          <div className="finger"></div>
                      </div>
                      {/* Mouse end */}
                      {/* Hint text */}
                      <p>scroll down</p>
                  </a>
              </div>
              {/* Scroll hint end */}
          </div>
      </header>
      {/* Header end */}
    </>
  )
}
