import React, {Component} from 'react';
import Slider from "react-slick";


class TestimonialCarousel extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,		
            infinite: true,
			dots: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
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
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>
									It might be because he&apos;s an artist. Who knows? But his passion,
									his calmness and optimism is just amazing.
									Whenever something happens he just lays back and smile!
									Also I really hope he will make use of his talent in the
									future. Not everyone is talented in drawing but he is! [...]
								</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<picture>
										<img src="/images/testimonials/pic1.jpg" width="100" height="100" alt="" />
									</picture>
									
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Erika Csibi</h5> 
								<span>Business Process Outsourcing Agent – Romania</span> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>
									Ronnie was our team leader when I worked with him and it was a great experience, witnessing his leadership
									and mentorship. The passion, when he set his mind to something, is what inspired me most because he made
									sure to see it through and delivery amidst all challenges and excuses but most importantly its that he
									involved everyone...
								</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<picture>
										<img src="/images/testimonials/pic2.jpg" width="100" height="100" alt="" />
									</picture>
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Arnold Daniel Netende</h5>
								<span>Developer, Writer, Entrepreneur – Uganda</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>
									I rarely come across real talents who stand out like Ronnie. 
									I had the pleasure of working with Ronnie for two years at AIESEC,
									collaborating on several project teams.
									Ronnie&apos;s ability to handle multiple projects was unlike any 
									I&apos;ve seen before and made a dramatic increase in
									the productivity of the programs at our organization...
								</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<picture>
										<img src="/images/testimonials/pic3.jpg" width="100" height="100" alt="" />
									</picture>
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Ian Curtis Oduori</h5>
								<span>Cybersecurity Professional – Kenya</span>
							</div>
						</div>
					</div>
					<div className="item">
							<div className="testimonial-8">
								<div className="testimonial-text">
									<p>
										Ronnie is very detail-oriented and produced great results for the company.
										He is a very hard working and focussed person. I have loved working with him at AIESEC.
										He is a commited person who leaves no regrets for his work but only appreciations.
									</p>
								</div>
								<div className="testimonial-detail clearfix">
									<div className="testimonial-pic radius shadow">
										<picture>
											<img src="/images/testimonials/pic4.jpg" width="100" height="100" alt="" />
										</picture>
									</div>
									<h5 className="testimonial-name m-t0 m-b5">Sean Kamugasa</h5>
									<span>Business Data Analyst, Software Engineer – Uganda</span>
								</div>
							</div>
					</div>
					
				</Slider>
			</>
		)
	}
	
}

export default TestimonialCarousel;