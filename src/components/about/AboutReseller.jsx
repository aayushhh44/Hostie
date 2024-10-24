import React from 'react'
import { Link } from 'react-router-dom'

function AboutReseller() {
    return (
        <>
            <div className="rts-about-reseller section__padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 padding-bottom-75">
                            <div className="hosting-about-image-bg" />
                            <div className="hosting-about-image">
                                <div className="img-one">
                                    <img
                                        src="assets/images/about/resell/image-1.png"
                                        width={378}
                                        height={400}
                                        alt=""
                                    />
                                </div>
                                <div className="img-two">
                                    <img
                                        src="assets/images/about/resell/image-2.png"
                                        width={247}
                                        height={347}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hosting-info">
                                <h3
                                    className="hosting-info__title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    About Reseller Hosting
                                </h3>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Our Reseller Plans let you start your own Hosting Business by
                                    selling our white-labeled products.
                                </p>
                                <div className="single-about-info">
                                    <div
                                        className="single"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        <div className="icon">
                                            <img src="assets/images/about/resell/support.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>24/7 Guru Support</h6>
                                            <p className="mb-0">
                                                Our custom control panel to use and removes the headache
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="single"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        <div className="icon">
                                            <img src="assets/images/about/resell/speed-meter.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Up To 20X Faster Turbo</h6>
                                            <p className="mb-0">
                                                Our custom control panel to use and removes the headache
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/pricing"
                                    className="btn__two btn__long secondary__bg secondary__color"
                                >
                                    View Plan <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutReseller