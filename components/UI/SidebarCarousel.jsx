import React, {Component} from 'react';
import Slider from "react-slick";

class SidebarCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 1,		
            infinite: true,
			dots: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow:1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full " {...settings}>
					<div className="item">
						<picture>
							<img src="/images/our-services/pic1.jpg" alt=""/>
						</picture>
					</div>
					<div className="item">
						<picture>
							<img src="/images/our-services/pic2.jpg" alt=""/>
						</picture>
					</div>
					<div className="item">
						<picture>
							<img src="/images/our-services/pic3.jpg" alt=""/>
						</picture>
					</div>
				</Slider>
			</>
		)
	}
	
}

export default SidebarCarousel;