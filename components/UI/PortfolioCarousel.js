import Link from 'next/link';
import React, {Component} from 'react';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
const contentBlog =[
	{images: '/images/project/pic1.jpg', },
	{images: '/images/project/pic2.jpg', },
	{images: '/images/project/pic3.jpg', },
	{images: '/images/project/pic4.jpg', },
	{images: '/images/project/pic5.jpg', },	
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link href="#" onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" title="Title Come Here">
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
							{contentBlog.map((item, index)=>(
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
													<h5>Project Name</h5>
													<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
													<a href="https://www.google.com/" target="bank" className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>
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