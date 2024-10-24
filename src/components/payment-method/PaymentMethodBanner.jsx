import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'

function PaymentMethodBanner() {
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
                        <div className="col-lg-12">
                            <div className="banner-area">
                                <div className="rts-hosting-banner rts-hosting-banner__content pricing__banner">
                                    <span
                                        className="starting__price"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Payment Method
                                    </span>
                                    <h1
                                        className="banner-title"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        Payment Methods
                                    </h1>
                                    <p
                                        className="slogan"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        You can purchase our services using a wide range of payment
                                        methods.
                                    </p>
                                    <div className="hosting-action">
                                        <Link
                                            to="/pricing-two"
                                            className="btn__two secondary__bg secondary__color"
                                        >
                                            Start Now <i className="fa-regular fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="rts-hosting-banner__image pricing-compare">
                                    <img
                                        src="assets/images/banner/pricing/banner__pricing__image.svg"
                                        alt=""
                                    />
                                    <div className="shape__image">
                                        <img
                                            src="assets/images/banner/pricing/shape__star.svg"
                                            alt=""
                                            className="shape__image--one show-hide"
                                        />
                                        <img
                                            src="assets/images/banner/pricing/shape__dollar.svg"
                                            alt=""
                                            className="shape__image--two top-bottom"
                                        />
                                        <img
                                            src="assets/images/banner/pricing/shape__dollar-2.svg"
                                            alt=""
                                            className="shape__image--three"
                                        />
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

export default PaymentMethodBanner