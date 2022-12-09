import Link from 'next/link';
import React, {Component} from 'react';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
const projectsData =[
	{
		images: '/images/project/pic1.jpg',
		projectSummary: `Worked on Official Website for Tours and Travel Agency - Marvel Safaris UG`,
		projectCategory: `Software`
	},
	{
		images: '/images/project/pic2.jpg',
		projectSummary: `Worked on Official Website for Logistics Tech company - Agri-Logistics Ltd`,
		projectCategory: `Software` 
	},
	{
		images: '/images/project/pic3.jpg',
		projectSummary: 'Worked on Official Logo & Branding Style guides for Fashion Brand - Jessified UK',
		projectCategory: `Design`
	 },
	{
		images: '/images/project/pic4.jpg',
		projectSummary: `Actively Working on Open Source solution that automatically 
		runs in the background of your Windows-OS Device to routinely clean up Junk files & improve performance,
		without you having to do it manually every time.`,
		projectCategory: `Software`
	 },
	{
		images: '/images/project/pic5.jpg',
		projectSummary: `Worked on this personal Website to help me share stuff I'm working on with the world, along with some lessons
		learnt along the way.`,
		projectCategory: `Software`
	 },	
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link href="#" onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" title="Explore Project Details">
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}


class PortfolioCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
							{projectsData.map((item, index)=>(
								<div className="item p-3" key={index}>
									<div className="dlab-box portfolio-box">
										<div className="dlab-media dlab-img-effect dlab-img-overlay1"> 
											<picture>
												<img src={item.images} alt="" />
											</picture>
											<div className="dlab-info-has p-a15 bg-primary">
												<Link href="#" className="site-button outline radius-xl white pull-left">Project Details</Link>
											</div>
											<div className="overlay-bx">
												<div className="overlay-icon text-white"> 
													<h5>{item.projectCategory}</h5>
													<p className="m-b10">{item.projectSummary}</p>
													<a href="https://www.google.com/" target="bank" className="mfp-link" title="Explore Project Details"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
													<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}	
						</Slider>
					</SRLWrapper >
				</SimpleReactLightbox>
			</>
		)
	}
	
}

export default PortfolioCarousel;