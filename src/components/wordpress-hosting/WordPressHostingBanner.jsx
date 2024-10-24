import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function WordPressHostingBanner() {
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
                                <span className="starting__price">WordPress Hosting</span>
                                <h1 className="banner-title">Get more from your WordPress.</h1>
                                <p className="slogan">Expect More From Your Website or App.</p>
                                <div className="hosting-action">
                                    <Link
                                        to="/vps-hosting"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        Buy VPS <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link to="/pricing" className="btn__white">
                                        Starting @ $10.00/mo
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image wordpress-banner__image">
                                <img src="assets/images/banner/banner__wordpress__image.svg" alt="" />
                                <img
                                    className="shape-image one top-bottom"
                                    src="assets/images/banner/banner__wordpress__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image two pulsing"
                                    src="assets/images/banner/banner__wordpress__image-sm2.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image three pulsing"
                                    src="assets/images/banner/banner__wordpress__image-sm2.svg"
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

export default WordPressHostingBanner