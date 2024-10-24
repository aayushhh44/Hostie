import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'
function DedicatedHostingBanner() {
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
                            <div className="rts-hosting-banner rts-hosting-banner__content dedicated__banner">
                                <span className="starting__price">Dedicated Hosting</span>
                                <h1 className="banner-title">
                                    Fully-Managed Dedicated Server Hosting
                                </h1>
                                <p className="slogan">Professional hosting at an affordable price.</p>
                                <div className="hosting-action">
                                    <Link
                                        to="/pricing"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        View Plan <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link to="/pricing-two" className="btn__white">
                                        Starting @ $10.00/mo
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image dedicated-banner__image">
                                <img src="assets/images/banner/banner__dedicated__image.svg" alt="" />
                                <img
                                    className="shape-image one"
                                    src="assets/images/banner/banner__dedicated__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image two"
                                    src="assets/images/banner/banner__dedicated__image-sm2.svg"
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

export default DedicatedHostingBanner