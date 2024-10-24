import React from 'react'
import { Link } from 'react-router-dom';
function HomeFiveHostingService() {
    return (
        <>
            <div className="rts-service-two section__padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-section section-style-two">
                                <div className="rts-section__two">
                                    <h6 className="sub__title">Best Hosting</h6>
                                    <h2
                                        className="title"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={700}
                                    >
                                        Best Hosting Services
                                    </h2>
                                    <p
                                        className="description mb-0"
                                        data-sal="slide-down"
                                        data-sal-delay={500}
                                        data-sal-duration={800}
                                    >
                                        Select your solution and we will help you narrow down our best
                                        high-speed options to fit your needs.
                                    </p>
                                </div>
                                <div className="rts-section-button">
                                    <Link to="/pricing" className="view-all">
                                        View All Service <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        <div className="col-lg-8 col-xl-6 col-md-8">
                            <div className="service-two style-two">
                                <div className="service-two__content">
                                    <h6 className="sub__title">Web Hosting</h6>
                                    <h4 className="title">
                                        Web hosting involves renting server from a hosting provider.
                                    </h4>
                                    <Link to="/wordpress-hosting" className="primary__btn btn__two">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="service-two__image">
                                    <img src="assets/images/service/two/service__icon_one.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/vps.svg" alt="" />
                                    </div>
                                    <Link to="/vps-hosting" className="service-title">
                                        VPS Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/vps-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/share.svg" alt="" />
                                    </div>
                                    <Link to="/shared-hosting" className="service-title">
                                        Shared Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/shared-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/wordpress.svg" alt="" />
                                    </div>
                                    <Link to="/wordpress-hosting" className="service-title">
                                        Wordpress Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/wordpress-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/eccommerce.svg" alt="" />
                                    </div>
                                    <Link to="/wordpress-hosting" className="service-title">
                                        Eccommerce Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/wordpress-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/cloud.svg" alt="" />
                                    </div>
                                    <Link to="/cloud-hosting" className="service-title">
                                        Cloud Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/cloud-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                        {/* single service */}
                        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
                            <div className="service-two-small style-two">
                                <div className="service-two-small__content">
                                    <div className="service-icon">
                                        <img src="assets/images/icon/dedicated.svg" alt="" />
                                    </div>
                                    <Link to="/dedicated-hosting" className="service-title">
                                        Dedicated Hosting
                                    </Link>
                                    <p className="description">
                                        WordPress Hosting gives you speed performance with full of
                                        features.
                                    </p>
                                    <Link to="/dedicated-hosting" className="service-btn">
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service end */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeFiveHostingService