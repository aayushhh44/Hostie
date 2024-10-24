import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function VpsHostingBanner() {
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
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Managed VPS Hosting
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Virtual Private Servers
                                </h1>
                                <p
                                    className="slogan"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Expect More From Your Website or App.
                                </p>
                                <div className="hosting-action">
                                    <Link
                                        to="/pricing"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        Buy VPS <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link to="/pricing-two" className="btn__white">
                                        Starting @ $10.00/mo
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image vps">
                                <img src="assets/images/banner/banner__vps__image.svg" alt="" />
                                <img
                                    className="shape-image one top-bottom2"
                                    src="assets/images/banner/banner__vps__image-sm1.svg"
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

export default VpsHostingBanner