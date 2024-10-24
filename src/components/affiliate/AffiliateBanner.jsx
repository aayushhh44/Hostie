import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AffiliateBanner() {
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
                    <div className="row justify-content-sm-center">
                        <div className="col-lg-12">
                            <div className="banner-area">
                                <div className="rts-hosting-banner rts-hosting-banner__content affiliate__banner">
                                    <span
                                        className="starting__price"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Affiliate Program
                                    </span>
                                    <h1
                                        className="banner-title"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        Hostie Web Hosting Affiliate Program
                                    </h1>
                                    <p
                                        className="slogan"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Where all your efforts are rewarded, thanks to the three flexible
                                        commission payout models
                                    </p>
                                    <div
                                        className="hosting-action"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        <Link
                                            to="/pricing-three"
                                            className="btn__two secondary__bg secondary__color"
                                        >
                                            View Plan <i className="fa-regular fa-arrow-right" />
                                        </Link>
                                        <Link to="/pricing" className="btn__white">
                                            Starting @ $10.00/mo
                                        </Link>
                                    </div>
                                </div>
                                <div className="rts-hosting-banner__image affiliate__banner-image">
                                    <img
                                        src="assets/images/banner/banner__about__image.jpg"
                                        width={532}
                                        height={370}
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

export default AffiliateBanner