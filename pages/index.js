import React,{Component} from 'react';
import HomeOwlSlider from '../components/UI/HomeOwlSlider';
import HomeOwlSlider2 from '../components/UI/HomeOwlSlider2';
import ImgCarouselContent from '../components/UI/ImgCarouselContent';
import HomeTab from '../components/UI/HomeTab';
import TestimonialCarousel from '../components/UI/TestimonialCarousel';
import FormStyle from '../components/UI/FormStyle';

class index extends Component{
	render(){
		return(
            <div className="page-wraper">
                <div className="page-content bg-white">
                    {/*  Slider Banner */}
                    <div className="owl-slider-banner main-slider">
                        <HomeOwlSlider />
                    </div>
                    {/*  Slider Banner */}
                    <div className="content-block">
                        {/* <!-- What I Do Start--> */}
                        <div className="section-full bg-white content-inner-1 about-us">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row" >
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">What I Do?<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Well...</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>
                                                    There&apos;s actually much more to me than just a few fancy titles that don&apos;t 
                                                    really mean anything, hahah...
                                                    Well, over time I&apos;ve worked on various projects involving development of Technology, 
                                                    mainly Software Systems. 
                                                    I mostly code using C# but also work with a few other Tools like ASP.NET Core, EF Core,
                                                    WPF, JavaScript/TypeScript, React.js(Next.js), Unity 3D Engine.
                                                    When I&apos;m not coding, you can find me blogging or working
                                                    on Visual Arts (2D/3D Computer Graphics).
                                                </p>
                                                <p>
                                                    If you&apos;re looking to explore some of my recent work, then you&apos;re in the right place.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img" >
                                        <picture>
                                            <img src="/images/about/pic4.jpg" data-tilt alt="" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- What I Do End--> */}
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "/images/background/bg-map.jpg", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">What&apos;s It Like Working With Ronnie?<span className="bg-primary"></span></h2>
                                    <h4 className="text-gray-dark">Here&apos;s what others say...</h4>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "/images/background/bg1.jpg" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                        
                    </div>
                </div>	
                
            </div>	
		)
	}
}
export default index;