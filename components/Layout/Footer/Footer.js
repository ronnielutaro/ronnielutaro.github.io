import Link from 'next/link';
import React, { Component } from 'react';

const date = new Date();
const year = date.getFullYear();

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Work</h5>
                                        <ul>
											<li><Link href="#">Backend </Link></li>
                                            <li><Link href="#">Web Design </Link></li>
                                            <li><Link href="#">Product Design</Link></li>
                                            <li><Link href="#">Digital Design</Link></li>
                                            <li><Link href="#">3D Modelling</Link></li>
                                            <li><Link href="#">Virtual Reality</Link></li>
                                            <li><Link href="#">Concept Art</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Useful Link</h5>
                                        <ul>
                                            <li><Link href="#">About Me</Link></li>
                                            <li><Link href="#">Engineering Blog </Link></li>
                                            <li><Link href="#">Visual Arts Blog</Link></li>
                                            <li><Link href="#">Home</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact Me</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong> Kampala, Uganda </li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong>+256772622186 (WhatsApp)</li>
                                            <li style={{textTransform: "lowercase"}}><i className="ti-email"></i><strong>email</strong>ronnielutaro@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Newsletter</h5>
                                            <p className="text-capitalize m-b20">
                                                Subscribe to newsletter and be the first to know whenever I share new content.
                                            </p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><Link href="#" className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="#" className="site-button whatsapp circle mr-1"><i className="fa fa-whatsapp"></i></Link></li>
                                            <li><Link href="#" className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link href="#" className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link href="#" className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="#" className="site-button github circle mr-1"><i className="fa fa-github"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © {year} - Ronnie Lutalo. 
                                All rights reserved.</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li className="ml-1"><Link href="#"> Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;