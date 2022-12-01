import Link from 'next/link';
import React, {Component} from 'react';
import Slider from "react-slick";

/* function SampleNextArrow(props) {
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
		<div className=" owl-prev la la-angle-left" onClick={onClick}/>
	</div>
  );
} */

class EventSlider extends Component{	
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 1500,
			navSpeed: 1500,	
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
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<Slider className="img-carousel-content owl-carousel owl-none" {...settings}>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Web Design</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-devices"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-pen"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Web Development</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Mobile Applications</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-team"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Internet marketing</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Mobile Applications</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-team"></i></span> 
						</div>
						<Link href="#" className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Internet marketing</h5>
							<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
					</div>
				</div>
				
			</Slider>			
		)
		
	}
	
}

export default EventSlider;