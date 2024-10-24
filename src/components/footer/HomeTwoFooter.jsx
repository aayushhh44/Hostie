import React from 'react'
import { Link } from 'react-router-dom';
function HomeTwoFooter() {
    return (
        <>
            <>
                <footer className="rts-footer transparent footer-style-default">
                    <div className="container">
                        <div className="row">
                            {/* widget */}
                            <div className="col-lg-3 col-md-6 col-sm-6 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget w-230">
                                    <Link to="#" className="footer__logo">
                                        <img src="/assets/images/logo/footer__two__logo.svg" alt="" />
                                    </Link>
                                    <p className="brand-desc address">
                                        1811 Silverside Rd, Wilmington <br /> DE 19810, USA
                                    </p>
                                    <div className="separator site-default-border" />
                                    <div className="contact-method">
                                        <Link to="tell:121">
                                            <span>
                                                <i className="fa-regular fa-phone" />
                                            </span>
                                            +806 (000) 88 99
                                        </Link>
                                        <Link to="mailto:contact@reactheme.com">
                                            <span>
                                                <i className="fa-light fa-envelope" />
                                            </span>
                                            info@hostie.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* widget end */}
                            {/* widget */}
                            <div className="col-lg-3 col-md-3 col-sm-6 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget extra-padding">
                                    <h5 className="widget-title">Company</h5>
                                    <div className="rts-footer__widget--menu ">
                                        <ul>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">News Feed</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/affiliate">Affiliate Program</Link>
                                            </li>
                                            <li>
                                                <Link to="/technology">Our Technology</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* widget end */}
                            {/* widget */}
                            <div className="col-lg-3 col-md-6 col-sm-6 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget">
                                    <h5 className="widget-title">Hosting</h5>
                                    <div className="rts-footer__widget--menu">
                                        <ul>
                                            <li>
                                                <Link to="/domain-checker">Domain Checker</Link>
                                            </li>
                                            <li>
                                                <Link to="/domain-transfer">Domain Transfer</Link>
                                            </li>
                                            <li>
                                                <Link to="/domain-registration">Domain Registration</Link>
                                            </li>
                                            <li>
                                                <Link to="/data-center">Data Centers</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq">Faq</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* widget end */}
                            {/* widget */}
                            <div className="col-lg-3 col-md-6 col-sm-6 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget">
                                    <h5 className="widget-title">Join Our Newsletter</h5>
                                    <p>We'll send you news and offers.</p>
                                    <form action="#" className="newsletter">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter mail"
                                            required
                                        />
                                        <span className="icon">
                                            <i className="fa-regular fa-envelope-open" />
                                        </span>
                                        <button type="submit">
                                            <i className="fa-regular fa-arrow-right" />
                                        </button>
                                    </form>
                                    <div className="social__media">
                                        <h5>social media</h5>
                                        <div className="social__media--list">
                                            <Link to="#" className="media">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                            <Link to="#" className="media">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                            <Link to="#" className="media">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                            <Link to="#" className="media">
                                                <i className="fa-brands fa-x-twitter" />
                                            </Link>
                                            <Link to="#" className="media">
                                                <i className="fa-brands fa-behance" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* widget end */}
                        </div>
                    </div>
                </footer>
                <div className="rts-footer__copyright-two bg-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="rts-footer__copyright-two__wrapper">
                                <p className="copyright">© Copyright 2024. All Rights Reserved.</p>
                                <div className="payment__method">
                                    <ul>
                                        <li>
                                            <img src="/assets/images/payment/visa.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/master-card.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/paypal.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/american-express.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/wise.svg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default HomeTwoFooter