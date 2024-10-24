import React from 'react'
import { Link } from 'react-router-dom';
function HomeFivePricing() {
    return (
        <>
            <section className="rts-pricing-five">
                <div className="container">
                    <div className="section-inner">
                        <div className="pricing-list">
                            <div className="row gy-30">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/pricing/pricing-icon-01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <Link to="#">WordPress Hosting</Link>
                                            </h4>
                                            <p className="desc">Starting $2.95/month</p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/pricing/pricing-icon-02.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <Link to="#">Web Hosting</Link>
                                            </h4>
                                            <p className="desc">Starting $2.95/month</p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/pricing/pricing-icon-03.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <Link to="#">.com domain name</Link>
                                            </h4>
                                            <p className="desc">Starting $2.95/month</p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/pricing/pricing-icon-04.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <Link to="#">Free WordPress</Link>
                                            </h4>
                                            <p className="desc">Starting $2.95/month</p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DOMAIN CHECKER */}
                <div className="rts-domain-checker-two section__padding position-relative">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-xl-5 col-md-10">
                                <div className="rts-hero__content home-five max-width-md">
                                    <h3
                                        className="font-40 w-340"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Find Your Perfect Domain Name
                                    </h3>
                                    <p
                                        className="description "
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        Welcome to our domain hosting platform online journey begins. We
                                        offer reliable and secure hosting.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7 col-md-10">
                                <div className="rts-hero__content">
                                    <form action="https://hostie-whmcs.themewant.com/cart.php">
                                        <div className="rts-hero__form-area">
                                            <input type="hidden" name="domain" defaultValue="register" />
                                            <input type="hidden" name="a" defaultValue="add" />
                                            <input
                                                type="text"
                                                name="query"
                                                placeholder="find your domain name"
                                                required=""
                                            />
                                            <div className="select-button-area">
                                                <select
                                                    name="domain_type"
                                                    id="select"
                                                    className="price__select transparent"
                                                >
                                                    <option value=".com">.com</option>
                                                    <option value=".net">.net</option>
                                                    <option value=".love">.love</option>
                                                    <option value=".pw">.pw</option>
                                                    <option value=".org">.org</option>
                                                    <option value=".info">.info</option>
                                                    <option value=".xyz">.xyz</option>
                                                </select>
                                                <button type="submit">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="banner-content-tag">
                                        <ul className="tag-list">
                                            <li>
                                                <span className="exc">.com</span>
                                                <span>only $6.19</span>
                                            </li>
                                            <li>
                                                <span className="exc">.net</span>
                                                <span>only $6.19</span>
                                            </li>
                                            <li>
                                                <span className="exc">.org</span>
                                                <span>only $6.19</span>
                                            </li>
                                            <li>
                                                <span className="exc">.info</span>
                                                <span>only $6.19</span>
                                            </li>
                                            <li>
                                                <span className="exc">.xyz</span>
                                                <span>only $6.19</span>
                                            </li>
                                            <li>
                                                <span className="exc">.xyz</span>
                                                <span>only $6.19</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="abosolute-shape">
                            <img
                                src="assets/images/domain/domain__finder__bg__five.png"
                                alt="domanin CHECKER"
                            />
                        </div>
                    </div>
                </div>
                {/* DOMAIN CHECKER END */}
            </section>

        </>
    )
}

export default HomeFivePricing