import Link from "next/link";
import FooterLogo from "../../components/footer-logo";
import {myFullName, twitterLink, facebookLink, instagramLink, linkedInLink, youtubeLink} from "./../../utils/constants"

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                >
                                                    term &amp; condition
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                >
                                                    policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    map
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center">
                                <div className="about-widget">
                                    <FooterLogo
                                        image="/img/logo.png"
                                    />
                                </div>
                                <div className="widget-copyright">
                                    <p>
                                        © 2021 <span>{myFullName}</span>. All Rights Reserved. Developed with{" "}
                                        <i className="icofont-heart-alt"></i> by{" "}
                                        <span>{myFullName}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li className="social-text">
                                        <span>follow me on social</span>
                                    </li>
                                    <li>
                                        <a
                                            href={twitterLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={linkedInLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={instagramLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={facebookLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_googledrive"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={facebookLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
