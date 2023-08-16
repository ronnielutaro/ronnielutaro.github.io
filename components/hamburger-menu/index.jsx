import PropTypes from "prop-types";
import Link from "next/link";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils";

const HamburgerMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <aside className={`off-canvas-wrapper ${show ? "active" : ""}`}>
            <div className="off-canvas-inner">
                <div className="off-canvas-overlay"></div>
                <div className="off-canvas-content">
                    <div className="off-canvas-header">
                        <div className="close-action">
                            <button className="btn-close" onClick={onClose}>
                                <i className="icon_close"></i>
                            </button>
                        </div>
                    </div>

                    <div className="off-canvas-item">
                        <div className="asside-navigation-area">
                            <ul className="asside-menu">
                                <li className="item">
                                    <Link
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="dropdown-submenu">
                                    <Link
                                        href="/portfolio"
                                    >
                                        <span>Portfolio</span>
                                    </Link>
                                    <span
                                        className="menu-toggle"
                                        onClick={onClickHandler}
                                        aria-hidden="true"
                                    ></span>
                                    <ul className="dropdown-nav">
                                        <li>
                                            <Link
                                                href="/portfolio"
                                            >
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/portfolio-details/1"
                                            >
                                                Portfolio Details
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className="dropdown-submenu">
                                    <Link
                                        href="/blog"
                                    >
                                        <span>Blog</span>
                                    </Link>
                                    <span
                                        className="menu-toggle"
                                        onClick={onClickHandler}
                                        aria-hidden="true"
                                    ></span>
                                    <ul className="dropdown-nav">
                                        <li>
                                            <Link
                                                href="/blog"
                                            >
                                                Blog Grid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog-details/1"
                                            >
                                                Blog Details
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="off-canvas-footer"></div>
                </div>
            </div>
        </aside>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
