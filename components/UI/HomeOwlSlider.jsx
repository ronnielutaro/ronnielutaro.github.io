import React, {Component} from 'react';
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class HomeOwlSlider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: true,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img">
						<picture>
							<img src="/images/main-slider/slide1.jpg" className="w-100" alt=""/>
						</picture>
					</div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white" style={{float: "right"}}>
								<h2 className="text-white font-weight-400">Ronnie Lutalo <br/></h2>
								<h5 className="text-white font-weight-400">Software Engineer | Designer | CG Artist <br/></h5>
								<p>
									Driven by desire and curiosity for creating Technology and Experiences that unlock new possibilities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default HomeOwlSlider;