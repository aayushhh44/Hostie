import React from 'react'
import { Link } from 'react-router-dom';
function HomeThreeService() {
    return (
        <>
            <div
                className="rts-services-area area-3 pb-120"
                data-sal="slide-down"
                data-sal-delay={200}
                data-sal-duration={800}
            >
                <div className="container">
                    <div className="section-inner">
                        <div className="row  g-5">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="service-wrapper">
                                    <div className="icon">
                                        <img src="assets/images/service/cloud__hosting2.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Cloud Hosting</h4>
                                        <p className="desc">
                                            WordPress Hosting gives speed performance with full features.
                                        </p>
                                        <Link to="/cloud-hosting" className="view-more-btn">
                                            View More <i className="fa-regular fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="wrapper-shape">
                                        <img src="assets/images/service/service-bg-shape.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="service-wrapper">
                                    <div className="icon">
                                        <img src="assets/images/service/web__hosting2.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Web Hosting</h4>
                                        <p className="desc">
                                            WordPress Hosting gives speed performance with full features.
                                        </p>
                                        <Link to="/wordpress-hosting" className="view-more-btn">
                                            View More <i className="fa-regular fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="wrapper-shape">
                                        <img src="assets/images/service/service-bg-shape.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="service-wrapper">
                                    <div className="icon">
                                        <img src="assets/images/service/reseller__hosting2.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Reseller Hosting</h4>
                                        <p className="desc">
                                            WordPress Hosting gives speed performance with full features.
                                        </p>
                                        <Link to="/reseller-hosting" className="view-more-btn">
                                            View More <i className="fa-regular fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="wrapper-shape">
                                        <img src="assets/images/service/service-bg-shape.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HomeThreeService