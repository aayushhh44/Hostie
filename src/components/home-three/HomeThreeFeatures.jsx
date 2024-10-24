import React from 'react'
import { Link } from 'react-router-dom';
function HomeThreeFeatures() {
    return (
        <>
            <div className="rts-feature-area pt--120 pb-120">
                <div className="container">
                    <div className="section-title-btn-area">
                        <div className="section-title-area text-start">
                            <h3
                                className="section-title font-40"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                Why Choose Hostie
                            </h3>
                            <p
                                className="desc"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                No matter which service you choose, you can expect the highest
                                performance.
                            </p>
                        </div>
                        <Link to="#" className="title-btn rts-btn">
                            Get Started
                        </Link>
                    </div>
                    <div className="section-inner">
                        <div className="feature-wrapper">
                            <div className="row g-5 mt--60 inner-separator">
                                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                                    <div className="feature-wrapper text-center">
                                        <div className="overlay" />
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-01.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Uptime Guarantee</h4>
                                            <p className="desc">
                                                Share processes &amp; data secure lona need to know basis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                                    <div className="feature-wrapper text-center">
                                        <div className="overlay" />
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Safe and Secured</h4>
                                            <p className="desc">
                                                Share processes &amp; data secure lona need to know basis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                                    <div className="feature-wrapper text-center">
                                        <div className="overlay" />
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-03.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Dedicated Support</h4>
                                            <p className="desc">
                                                Share processes &amp; data secure lona need to know basis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                                    <div className="feature-wrapper text-center">
                                        <div className="overlay" />
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-04.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Money-Back Guarantee</h4>
                                            <p className="desc">
                                                Share processes &amp; data secure lona need to know basis
                                            </p>
                                        </div>
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

export default HomeThreeFeatures