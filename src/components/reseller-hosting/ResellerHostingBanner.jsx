import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'
function ResellerHostingBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>

            <div className="rts-hosting-banner rts-hosting-banner-bg banner-default-height">
                <div className="container">
                    <div className="row">
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content resell__banner">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Reseller Hosting
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Flexible Reseller Hosting
                                </h1>
                                <p
                                    className="slogan"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Resell Web Hosting to Earn Revenue &amp; Support Your Clients
                                </p>
                                <div
                                    className="hosting-action"
                                    data-sal="slide-down"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        to="/pricing"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        View Plan <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link to="#" className="btn__white">
                                        Starting @ $10.00/mo
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image reseller-banner__image">
                                <img src="assets/images/banner/banner__resell__image.svg" alt="" />
                                <img
                                    className="shape-image one"
                                    src="assets/images/banner/banner__resell__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image two"
                                    src="assets/images/banner/banner__resell__image-sm2.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image three pulsing"
                                    src="assets/images/banner/banner__resell__image-sm3.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResellerHostingBanner