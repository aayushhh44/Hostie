import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SupportBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <div className="rts-hosting-banner  rts-hosting-banner-bg banner-default-height">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-area">
                                <div className="rts-hosting-banner rts-hosting-banner__content support__banner">
                                    <span
                                        className="starting__price"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Hosting Support
                                    </span>
                                    <h1
                                        className="banner-title"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        Expert And Friendly Hosting Support
                                    </h1>
                                    <p
                                        className="slogan"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Our support team is famous for being fast, friendly and helpful.
                                        Our customers confirm.
                                    </p>
                                    <div
                                        className="hosting-action mt-5"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={800}
                                    >
                                        <img src="assets/images/banner/title-shape-2.svg" alt="" />{" "}
                                        <Link to="#" className="btn__white">
                                            {" "}
                                            24/7 Hours Dedicated Support
                                        </Link>
                                    </div>
                                </div>
                                <div className="rts-hosting-banner__image support">
                                    <img
                                        src="assets/images/banner/support/banner__support__image.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape one shake-br"
                                        src="assets/images/banner/support/banner__support__image-sm-1.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape two shake-tl"
                                        src="assets/images/banner/support/banner__support__image-sm-2.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape three rotate-one"
                                        src="assets/images/banner/support/banner__support__image-sm-3.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape four rotate-two"
                                        src="assets/images/banner/support/banner__support__image-sm-4.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape five"
                                        src="assets/images/banner/support/banner__support__image-sm-5.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape six rotate-one"
                                        src="assets/images/banner/support/banner__support__image-sm-6.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape seven"
                                        src="assets/images/banner/support/banner__support__image-sm-7.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SupportBanner